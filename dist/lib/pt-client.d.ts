declare class PtClient {
    private static readonly host;
    private static readonly client;
    private static readonly clientKey;
    private static readonly timeout;
    private static readonly logger;
    private static post;
    private static getToken;
    static validate(name: string, alias: string): Promise<import("axios").AxiosResponse<any> | {
        status: number;
        code: any;
        data: {
            message: any;
            response: any;
        };
    }>;
}
export { PtClient };
