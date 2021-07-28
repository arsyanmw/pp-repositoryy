import { Client } from '@elastic/elasticsearch';
interface ShardsResponse {
    total: number;
    successful: number;
    failed: number;
    skipped: number;
}

interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

interface ElasticSearchResponse<T> {
    took: number;
    timed_out: boolean;
    _scroll_id?: string;
    _shards: ShardsResponse;
    hits: {
        total: {
            value: number;
            relation: string;
        };
        max_score: number;
        hits: Array<{
            _index: string;
            _type: string;
            _id: string;
            _score: number;
            _source: T;
            _version?: number;
            _explanation?: Explanation;
            fields?: any;
            highlight?: any;
            inner_hits?: any;
            matched_queries?: string[];
            sort?: string[];
        }>;
    };
    aggregations?: any;
}

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

interface SourceProfilePp {
    perseroan_name: string;
    perseroan_phone: string;
    province_name: string;
    city_name: string;
    district_name: string;
    sub_district_name: string;
    pp_master_id: number;
    transaction_qty: number;
    perseroan_address: string;
    perseroan_postalcode: number;
}
interface ResultProfilePp {
    perseroanName: string;
    perseroanPhone: string;
    provinceName: string;
    cityName: string;
    districtName: string;
    subDistrictName: string;
    ppMasterId: number;
    transactionQty: number;
    perseroanAddress: string;
    perseroanPostalcode: number;
}

class ElasticLibrary {
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private static readonly elasticsearchHost = process.env.ELASTICSEARCH_APPS || 'http://127.0.0.1:9200';
    private elasticSearchConnection: Client;

    constructor() {
        this.elasticSearchConnection = new Client({
            node: ElasticLibrary.elasticsearchHost,
        });
    }

    public getIndexPostfix(index: string): string {
        return `${index.trim()}_${ElasticLibrary.environment.toLowerCase()}`;
    }

    public async searchProfilePp(query: SearchBodyProfilePp): Promise<ResultSearchResponse<ResultProfilePp>> {
        const elasticResponse = await this.elasticSearchConnection.search<
            ElasticSearchResponse<SourceProfilePp>,
            SearchBodyProfilePp
        >({
            index: this.getIndexPostfix('search_profile_pp'),
            body: query,
        });

        const results = elasticResponse.body.hits.hits.map(
            (hit): ResultProfilePp => {
                return {
                    perseroanName: hit._source.perseroan_name,
                    perseroanPhone: hit._source.perseroan_phone,
                    provinceName: hit._source.province_name,
                    cityName: hit._source.city_name,
                    districtName: hit._source.district_name,
                    subDistrictName: hit._source.sub_district_name,
                    ppMasterId: hit._source.pp_master_id,
                    transactionQty: hit._source.transaction_qty,
                    perseroanAddress: hit._source.perseroan_address,
                    perseroanPostalcode: hit._source.perseroan_postalcode,
                };
            },
        );

        return {
            totalCount: elasticResponse.body.hits.total.value,
            data: results,
        };
    }
}

export { ElasticSearchResponse, ElasticLibrary };
