import { Base } from './Base';
import { BlacklistType } from './BlacklistType';
export declare class Blacklist extends Base {
    id: number;
    blacklistName: string;
    BlacklistType: BlacklistType;
    reason: string;
}
