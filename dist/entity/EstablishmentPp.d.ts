import { Base } from "./Base";
import { SubDistrict } from "./SubDistrict";
import { TransactionType } from "./TransactionType";
export declare class EstablishmentPp extends Base {
    id: number;
    ppTypeId: number;
    transactionType: TransactionType;
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
    perseroanNpwpCreatedAt: Date;
    perseroanKppCode: number;
    perseroanKppName: number;
    fileStatement: string;
    fileCertificate: string;
}
