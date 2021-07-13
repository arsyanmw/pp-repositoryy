import { BaseUserLog } from './BaseUserLog';
export declare class Badwords extends BaseUserLog {
    id: number;
    words: string;
    badwordsTypeId: number;
    wordsCode: string;
    reason: string;
}
