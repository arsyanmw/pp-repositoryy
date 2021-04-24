import { Identity } from '../entity/Identity';
interface TempData {
    nik?: string;
    email?: string;
}
declare class Jwt {
    static generate(identity: Identity): Promise<any>;
    static generateTemporaryToken(data: TempData): Promise<any>;
    static verify(token: string): Promise<any>;
    private static payload;
}
export { Jwt };
