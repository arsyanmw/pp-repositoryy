import { ResultIndexorUpdateResponse } from './elastic-search';
import { ClientInformationResultInterface } from './client-information';
declare enum DataType {
    information = "Information",
    queryDatabase = "Query Database",
    insertDatabase = "Insert Database",
    updateDatabase = "Update Database",
    deleteDatabase = "Delete Database"
}
interface UserInformationInterface {
    id: number;
    nik?: string;
    fullName: string;
    email: string;
    token: string;
}
interface BaseAuditrail {
    clientInformation: ClientInformationResultInterface;
    userInformation: UserInformationInterface;
    action: string;
    source?: string;
    dataType: Array<DataType>;
    data: any;
}
declare type sendStatusType = 'success' | 'failed';
interface LogEmailInterface {
    subject: string;
    sendTo: string;
    sendFrom?: string;
    sendStatus?: sendStatusType;
    errorMessage?: string;
    source?: string;
}
declare class AuditTrail {
    private static readonly ENVIRONMENT;
    private static readonly SERVICE_NAME;
    private elasticLibrary;
    constructor();
    private getIndex;
    private getIndexLogEmail;
    commit(auditTrail: BaseAuditrail): Promise<any>;
    email(logEmail: LogEmailInterface): Promise<ResultIndexorUpdateResponse>;
}
export { AuditTrail, DataType };
