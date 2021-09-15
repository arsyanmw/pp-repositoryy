interface StoreParamData {
    NO_AKTA: string;
    DESKRIPSI: string;
}
export interface StoreRequest {
    nik: string;
    idLembaga?: string;
    namaLembaga?: string;
    param: Array<StoreParamData>;
}
declare class DukcapilStoreClient {
    private static readonly host;
    private static readonly key;
    private static readonly logger;
    private static post;
    static store(data: StoreRequest): Promise<any>;
}
export { DukcapilStoreClient };
