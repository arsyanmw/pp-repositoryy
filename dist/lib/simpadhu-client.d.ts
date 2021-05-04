interface DefaultRequest {
    idProduk?: number;
    tipeTransaksi?: number;
    idMapping?: number;
}
export interface ValidationRequest extends DefaultRequest {
    voucher: string;
}
export interface RedeemRequest extends DefaultRequest {
    voucher: string;
    trxNumber: string;
}
declare class SimpadhuClient {
    private static readonly byPassVoucher;
    private static readonly host;
    private static readonly key;
    private static post;
    private static getToken;
    static validate(data: ValidationRequest): Promise<any>;
    static redeem(data: RedeemRequest): Promise<any>;
}
export { SimpadhuClient };
