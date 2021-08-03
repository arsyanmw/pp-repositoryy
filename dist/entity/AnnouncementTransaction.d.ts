import { BaseUserLog } from './BaseUserLog';
export declare class AnnouncementTransaction extends BaseUserLog {
    id: number;
    ppMasterId: number;
    transactionTypeId: number;
    transactionAt: Date;
    perseroanName: string;
    certificateNumber: string;
    perseroanSubDistrictId: number;
}
