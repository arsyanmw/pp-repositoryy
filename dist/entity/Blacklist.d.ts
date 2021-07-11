import { BaseUserLog } from './BaseUserLog';
import { BlacklistType } from './BlacklistType';
export declare class Blacklist extends BaseUserLog {
    id: number;
    blacklistName: string;
    BlacklistType: BlacklistType;
    reason: string;
}
