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
        _shards: {
            total: number;
            successful: number;
            failed: number;
        };
        _seq_no: number;
        _primary_term: number;
    };
    statusCode: number;
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
}
declare class ElasticLibrary {
    private static readonly environment;
    private static readonly elasticsearchHost;
    private elasticSearchConnection;
    constructor();
    getIndexPostfix(index: string): string;
    searchProfilePp(query: SearchBodyProfilePp): Promise<ResultSearchResponse<ResultProfilePp>>;
    indexOrUpdateProfilePp(profilePp: ResultProfilePp): Promise<ResultIndexorUpdateResponse>;
}
export { ElasticLibrary };
