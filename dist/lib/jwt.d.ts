import { Identity } from '../entity/Identity';
interface TempData {
    nik?: string;
    email?: string;
}
interface ClientCredentialData {
    client: string;
    clientKey: string;
}
declare class Jwt {
    static generate(identity: Identity): Promise<any>;
    static generateTemporaryToken(data: TempData): Promise<any>;
    static generateThirdPartyAccessToken(data: ClientCredentialData, ttl: string | number): Promise<any>;
    static verify(token: string): Promise<any>;
    static verifyAhuToken(token: string): string | object;
    private static payload;
}
export { Jwt };
