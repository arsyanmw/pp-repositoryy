import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
export declare class IdentityNik extends BaseUserLog {
    id: number;
    identity: Identity;
    nik: string;
    isVerified: number;
}
