import { Base } from './Base';
import { SubDistrict } from './SubDistrict';
export declare class EstablishmentPpHistory extends Base {
    id: number;
    insertedAt: Date;
    establishmentPpId: number;
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
    kbliValueJson: string;
    ownerValueJson: string;
    benefitValueJson: string;
}
