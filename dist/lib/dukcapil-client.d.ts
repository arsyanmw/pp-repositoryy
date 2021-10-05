interface nikVerifByElementParams {
    trackingParam?: string;
    threshold?: string;
    fullName?: string;
    nik: string;
    birthDate?: Date;
    birthPlace?: string;
    address?: string;
    provinceCode?: number;
    cityCode?: number;
    districtCode?: number;
    subDistrictCode?: number;
    addressRt?: number;
    addressRw?: number;
}
declare class DukcapilClient {
    private static readonly environment;
    private static readonly host;
    private static readonly userId;
    private static readonly password;
    private static readonly redis;
    private static readonly timeout;
    private static readonly logger;
    private static post;
    private static get;
    static nikVerifByElement(requestBody: nikVerifByElementParams): Promise<any>;
}
export { DukcapilClient, nikVerifByElementParams };
