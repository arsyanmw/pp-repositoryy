import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
export declare class IdentityEmail extends BaseUserLog {
    id: number;
    identity: Identity;
    email: string;
    isVerified: number;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}
