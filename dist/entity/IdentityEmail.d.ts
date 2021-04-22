import { Base } from "./Base";
import { Identity } from "./Identity";
export declare class IdentityEmail extends Base {
    id: number;
    identity: Identity;
    email: string;
    isVerified: number;
}
