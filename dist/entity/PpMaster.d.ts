import { Base } from './Base';
import { SubDistrict } from './SubDistrict';
export declare class PpMaster extends Base {
    id: number;
    ppTypeId: number;
    transactionTypeId: number;
    identitiesId: number;
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
