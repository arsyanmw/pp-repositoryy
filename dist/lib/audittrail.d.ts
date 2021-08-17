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
}
interface BaseAuditrail {
    clientInformation: ClientInformationResultInterface;
    userInformation: UserInformationInterface;
    "@timestamp"?: Date;
    action: string;
    source?: string;
    dataType: Array<DataType>;
    data: any;
}
declare class AuditTrail {
    private static readonly ENVIRONMENT;
    private static readonly SERVICE_NAME;
    private elasticLibrary;
    constructor();
    private getIndex;
    commit(auditTrail: BaseAuditrail): Promise<ResultIndexorUpdateResponse>;
}
export { AuditTrail, DataType };
