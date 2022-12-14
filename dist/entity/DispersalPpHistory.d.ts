import { Base } from './Base';
export declare class DispersalPpHistory extends Base {
    id: number;
    insertedAt: Date;
    dispersalPpId: number;
    ppTypeId: number;
    transactionTypeId: number;
    sectionValueJson: string;
    vouchersCode: string;
    identitiesId: number;
    nextIdentitiesId: number;
    prevIdentitiesId: number;
    transactionNumber: string;
    certificateNumber: string;
    perseroanName: string;
    perseroanAlias: string;
    perseroanEmail: string;
    perseroanAddress: string;
    perseroanRt: string;
    perseroanRw: string;
    perseroanSubDistrictId: number;
    perseroanPostalcode: number;
    perseroanPhone: number;
    perseroanCapital: number;
    perseroanNpwp: number;
    perseroanNpwpCreatedAt: Date;
    perseroanKppCode: number;
    perseroanKppName: string;
    fileStatement: string;
    fileCertificate: string;
    kbliValueJson: string;
    ownerValueJson: string;
    benefitValueJson: string;
    dispersalReasonId: number;
    statementNameSimilarity: string;
    statementBeneficialOwner: string;
    statementCondition: string;
    isBlocked: number;
    blockedAt: Date;
}
