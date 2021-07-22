import { SubDistrict } from './SubDistrict';
export declare class PpBlockedHistory {
    id: number;
    insertedAt: Date;
    ppMasterId: number;
    ppBlockedId: number;
    vouchersCode: string;
    identitiesId: number;
    lastTransactionNumber: string;
    lastCertificateNumber: string;
    perseroanName: string;
    subDistrict: SubDistrict;
    subDistrictId: number;
    blockedSource: number;
    blockedReasons: string;
    requesterPerson: string;
    isBlocked: number;
    blockedAt: Date;
    blockedBy: number;
    updatedAt: Date;
    updatedBy: number;
}
