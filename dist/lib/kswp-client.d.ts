export declare enum enumPpPermissionCode {
    PP01 = "PP01",
    PP02 = "PP02",
    PP03 = "PP03"
}
declare class KswpClient {
    private static readonly byPassNpwp;
    private static readonly environment;
    private static readonly host;
    private static readonly username;
    private static readonly password;
    private static readonly logger;
    private static post;
    private static get;
    private static getToken;
    static validateNpwpPp(npwp: string, ppPermissionCode: enumPpPermissionCode, perseroanName?: string): Promise<any>;
}
export { KswpClient };
