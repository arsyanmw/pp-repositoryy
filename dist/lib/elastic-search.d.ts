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
declare class ElasticLibrary {
    private static readonly environment;
    private static readonly elasticsearchHost;
    private elasticSearchConnection;
    constructor();
    indexOrUpdate(indexInput: IndexInputInterface<any>): Promise<ResultIndexorUpdateResponse>;
    indicesPutSettings(indexPutSettings: IndicesPutSettingsInterface): Promise<{
        body: {
            acknowledged: boolean;
        };
        statusCode: number;
    }>;
    indicesGet(indexGet: IndicesGet): Promise<{
        body: any;
        statusCode: number;
    }>;
    getIndexPostfix(index: string): string;
    searchProfilePp(query: SearchBodyProfilePp): Promise<ResultSearchResponse<ResultProfilePp>>;
    indexOrUpdateProfilePp(profilePp: ResultProfilePp): Promise<ResultIndexorUpdateResponse>;
}
export { ElasticLibrary, IndexInputInterface, ResultIndexorUpdateResponse };
