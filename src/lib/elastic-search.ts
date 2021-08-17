import { Client } from '@elastic/elasticsearch';
import { pickBy, Identity } from 'lodash';

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

class ElasticLibrary {
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private static readonly elasticsearchHost = process.env.ELASTICSEARCH_APPS || 'http://127.0.0.1:9200';
    private elasticSearchConnection: any;

    constructor() {
        this.elasticSearchConnection = new Client({
            node: ElasticLibrary.elasticsearchHost,
        });
    }

    public async indexOrUpdate(indexInput: IndexInputInterface<any>): Promise<ResultIndexorUpdateResponse> {
        return await this.elasticSearchConnection.index({
            ...indexInput,
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
                is_blocked: profilePp.isBlocked,
            },
            Identity,
        );

        const result = await this.elasticSearchConnection.index({
            index: this.getIndexPostfix('search_profile_pp'),
            id: profilePp.ppMasterId,
            body: { doc },
        });
        return result;
    }
}

export { ElasticLibrary, IndexInputInterface, ResultIndexorUpdateResponse };
