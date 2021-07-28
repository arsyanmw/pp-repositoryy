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
declare class ElasticLibrary {
    private static readonly environment;
    private static readonly elasticsearchHost;
    private elasticSearchConnection;
    constructor();
    getIndexPostfix(index: string): string;
    searchProfilePp(query: SearchBodyProfilePp): Promise<ResultSearchResponse<ResultProfilePp>>;
}
export { ElasticSearchResponse, ElasticLibrary };
