import { Base } from './Base';
import { SubDistrict } from './SubDistrict';
export declare class PpMaster extends Base {
    id: number;
    ppTypeId: number;
    transactionTypeId: number;
    sectionValueJson: string;
    identitiesId: number;
    nextIdentitiesId: number;
    prevIdentitiesId: number;
    nextOwnerValueJson: string;
    prevOwnerValueJson: string;
    certificateNumber: string;
    perseroanName: string;
    perseroanAlias: string;
    perseroanEmail: string;
    perseroanAddress: string;
    perseroanRt: string;
    perseroanRw: string;
    SubDistrict: SubDistrict;
    perseroanSubDistrictId: number;
    perseroanPostalcode: number;
    perseroanPhone: number;
    perseroanCapital: number;
    perseroanNpwp: number;
    perseroanNpwpCreatedAt: Date;
    perseroanKppCode: string;
    perseroanKppName: string;
    fileStatement: string;
    fileCertificate: string;
    kbliValueJson: string;
    ownerValueJson: string;
    benefitValueJson: string;
    dispersalReasonId: number;
    isBlocked: number;
    blockedAt: Date;
}
