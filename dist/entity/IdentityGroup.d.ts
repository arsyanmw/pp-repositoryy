import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
import { Group } from './Group';
export declare class IdentityGroup extends BaseUserLog {
    id: number;
    identity: Identity;
    group: Group;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}
