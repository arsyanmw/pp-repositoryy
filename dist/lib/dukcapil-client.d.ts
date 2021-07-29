interface nikVerifByElementParams {
    trackingParam?: string;
    threshold?: string;
    fullName?: string;
    nik: string;
    birthDate?: Date;
}
declare class DukcapilClient {
    private static readonly environment;
    private static readonly host;
    private static readonly userId;
    private static readonly password;
    private static readonly redis;
    private static readonly logger;
    private static post;
    private static get;
    static nikVerifByElement(requestBody: nikVerifByElementParams): Promise<any>;
}
export { DukcapilClient };
