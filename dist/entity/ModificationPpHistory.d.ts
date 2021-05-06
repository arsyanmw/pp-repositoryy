import { Base } from './Base';
import { SubDistrict } from './SubDistrict';
export declare class ModificationPpHistory extends Base {
    id: number;
    insertedAt: Date;
    modificationtPpId: number;
    ppTypeId: number;
    transactionTypeId: number;
    vouchersCode: string;
    transactionNumber: string;
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
    fileStatement: string;
    fileCertificate: string;
    kbliValueJson: string;
    ownerValueJson: string;
    benefitValueJson: string;
}
