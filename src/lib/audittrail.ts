import { ElasticLibrary, ResultIndexorUpdateResponse } from './elastic-search';
import { ClientInformationResultInterface } from './client-information';
import * as moment from 'moment';

enum DataType {
    information = 'Information',
    queryDatabase = 'Query Database',
    insertDatabase = 'Insert Database',
    updateDatabase = 'Update Database',
    deleteDatabase = 'Delete Database',
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
    '@timestamp'?: Date;
    action: string;
    source?: string;
    dataType: Array<DataType>;
    data: any;
}

class AuditTrail {
    private static readonly ENVIRONMENT: string = process.env.ENVIRONMENT || 'development';
    private static readonly SERVICE_NAME = process.env.SERVICE_NAME || 'service-local';
    private elasticLibrary: ElasticLibrary;

    constructor() {
        this.elasticLibrary = new ElasticLibrary();
    }

    private getIndex() {
        return `audittrail-${AuditTrail.ENVIRONMENT.toLowerCase()}-${moment().locale('id').format('YYYY.MM.DD')}`;
    }

    public async commit(auditTrail: BaseAuditrail): Promise<ResultIndexorUpdateResponse> {
        return await this.elasticLibrary.indexOrUpdate({
            index: this.getIndex(),
            body: {
                '@timestamp': moment().locale('id').toISOString(),
                source: AuditTrail.SERVICE_NAME,
                ...auditTrail,
            },
        });
    }
}

export { AuditTrail, DataType };
