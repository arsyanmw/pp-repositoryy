import { Client } from '@elastic/elasticsearch';
import { pickBy, identity, isNumber, toString } from 'lodash';
import * as moment from 'moment';

interface SearchBodyProfilePp {
    from?: number;
    size?: number;
    query: {
        match?: {
            perseroan_name?: {
                query: string;
                operator: string;
            };
        };
        match_all?: any;
    };
}

interface ResultSearchResponse<T> {
    totalCount: number;
    data: Array<T>;
}

interface ResultIndexorUpdateResponse {
    body: {
        index: string;
        type: string;
        _type: string;
        _id: string;
        _version: number;
        result: string;
        _shards: { total: number; successful: number; failed: number };
        _seq_no: number;
        _primary_term: number;
    };
    statusCode: number;
}

interface SourceProfilePp {
    pp_master_id: number;
    perseroan_name?: string;
    perseroan_phone?: string;
    province_name?: string;
    city_name?: string;
    district_name?: string;
    sub_district_name?: string;
    transaction_qty?: number;
    perseroan_address?: string;
    perseroan_postalcode?: number;
    last_status?: number;
    is_blocked?: number;
}
interface ResultProfilePp {
    ppMasterId: number;
    perseroanName?: string;
    perseroanPhone?: string;
    provinceName?: string;
    cityName?: string;
    districtName?: string;
    subDistrictName?: string;
    transactionQty?: number;
    perseroanAddress?: string;
    perseroanPostalcode?: number;
    lastStatus?: number;
    isBlocked?: number;
}

interface IndexInputInterface<T> {
    index: string;
    id?: string | number;
    body: any;
}
interface IndicesBase {
    index: string | string[];
    flat_settings?: boolean;
    master_timeout?: string;
    ignore_unavailable?: boolean;
    allow_no_indices?: boolean;
    expand_wildcards?: 'open' | 'closed' | 'hidden' | 'none' | 'all';
}
interface IndicesGet extends IndicesBase {
    include_type_name?: boolean;
    local?: boolean;
    include_defaults?: boolean;
}
interface IndicesPutSettingsInterface extends IndicesBase {
    index: string | string[];
    timeout?: string;
    preserve_existing?: boolean;
    body: any;
}

class ElasticLibrary {
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private static readonly elasticsearchHost = process.env.ELASTICSEARCH_APPS || 'http://127.0.0.1:9200';
    private elasticSearchConnection: any;

    constructor() {
        this.elasticSearchConnection = new Client({
            nodes: toString(ElasticLibrary.elasticsearchHost).split(','),
            requestTimeout: 20000,
        });
    }

    public async indexOrUpdate(indexInput: IndexInputInterface<any>): Promise<ResultIndexorUpdateResponse> {
        return await this.elasticSearchConnection.index({
            ...indexInput,
        });
    }

    public async indicesPutSettings(
        indexPutSettings: IndicesPutSettingsInterface,
    ): Promise<{
        body: {
            acknowledged: boolean;
        };
        statusCode: number;
    }> {
        return await this.elasticSearchConnection.indices.putSettings({
            ...indexPutSettings,
        });
    }

    public async indicesGet(
        indexGet: IndicesGet,
    ): Promise<{
        body: any;
        statusCode: number;
    }> {
        return await this.elasticSearchConnection.indices.get({
            ...indexGet,
        });
    }

    public getIndexPostfix(index: string): string {
        return `${index.trim()}_${ElasticLibrary.environment.toLowerCase()}`;
    }

    public async searchProfilePp(query: SearchBodyProfilePp): Promise<ResultSearchResponse<ResultProfilePp>> {
        const elasticResponse = await this.elasticSearchConnection.search({
            index: this.getIndexPostfix('search_profile_pp'),
            body: query,
        });

        const results = elasticResponse.body.hits.hits.map(
            (hit): ResultProfilePp => {
                const source: SourceProfilePp = hit._source;
                return {
                    perseroanName: source.perseroan_name,
                    perseroanPhone: source.perseroan_phone,
                    provinceName: source.province_name,
                    cityName: source.city_name,
                    districtName: source.district_name,
                    subDistrictName: source.sub_district_name,
                    ppMasterId: source.pp_master_id,
                    transactionQty: source.transaction_qty,
                    perseroanAddress: source.perseroan_address,
                    perseroanPostalcode: source.perseroan_postalcode,
                    lastStatus: source.last_status,
                    isBlocked: source.is_blocked,
                };
            },
        );

        return {
            totalCount: elasticResponse.body.hits.total.value,
            data: results,
        };
    }

    public async indexOrUpdateProfilePp(profilePp: ResultProfilePp): Promise<ResultIndexorUpdateResponse> {
        const is_blocked = profilePp.isBlocked;
        const doc: SourceProfilePp = pickBy(
            {
                pp_master_id: profilePp.ppMasterId,
                perseroan_name: profilePp.perseroanName,
                perseroan_phone: profilePp.perseroanPhone,
                province_name: profilePp.provinceName,
                city_name: profilePp.cityName,
                district_name: profilePp.districtName,
                sub_district_name: profilePp.subDistrictName,
                transaction_qty: profilePp.transactionQty,
                perseroan_address: profilePp.perseroanAddress,
                perseroan_postalcode: profilePp.perseroanPostalcode,
                last_status: profilePp.lastStatus,
            },
            identity,
        );

        if (isNumber(is_blocked)) doc.is_blocked = is_blocked;

        try {
            const { body: oldSource } = await this.elasticSearchConnection.getSource({
                index: this.getIndexPostfix('search_profile_pp'),
                id: profilePp.ppMasterId,
            });
            const result = await this.elasticSearchConnection.index({
                index: this.getIndexPostfix('search_profile_pp'),
                id: profilePp.ppMasterId,
                body: { ...oldSource, ...doc, '@timestamp': moment().locale('id').toISOString() },
            });
            return result;
        } catch (error) {
            const result = await this.elasticSearchConnection.index({
                index: this.getIndexPostfix('search_profile_pp'),
                id: profilePp.ppMasterId,
                body: { ...doc, '@timestamp': moment().locale('id').toISOString() },
            });
            return result;
        }
    }
}

export { ElasticLibrary, IndexInputInterface, ResultIndexorUpdateResponse };
