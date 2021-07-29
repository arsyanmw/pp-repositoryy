import { SubDistrict } from './SubDistrict';
export declare class PpBlocked {
    id: number;
    ppMasterId: number;
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
    createdAt: Date;
    blockedBy: number;
    updatedAt: Date;
    updatedBy: number;
}
