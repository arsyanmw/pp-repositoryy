import { ElasticLibrary, ResultIndexorUpdateResponse } from './elastic-search';
import { ClientInformationResultInterface } from './client-information';
import { cloneDeepWith, isInteger } from 'lodash';
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

type sendStatusType = 'success' | 'failed';
interface LogEmailInterface {
    subject: string;
    sendTo: string;
    sendFrom?: string;
    sendStatus?: sendStatusType;
    errorMessage?: string;
    source?: string;
}

class AuditTrail {
    private static readonly ENVIRONMENT: string = process.env.ENVIRONMENT || 'development';
    private static readonly SERVICE_NAME = process.env.SERVICE_NAME || 'service-local';
    private elasticLibrary: ElasticLibrary;

    constructor() {
        this.elasticLibrary = new ElasticLibrary();
    }

    private getIndex(source: string): string {
        return `audittrail-${source}-${AuditTrail.ENVIRONMENT.toLowerCase()}-${moment()
            .locale('id')
            .format('YYYY.MM.DD')}`;
    }

    private getIndexLogEmail(): string {
        return `logs-email-${AuditTrail.ENVIRONMENT.toLowerCase()}-${moment().locale('id').format('YYYY.MM.DD')}`;
    }

    public async commit(auditTrail: BaseAuditrail): Promise<any> {
        const sourceName = auditTrail.source || AuditTrail.SERVICE_NAME;
        const isCreated = await this.checkIndex(this.getIndex(sourceName));

        const data = cloneDeepWith(auditTrail.data, (value) => {
            if (isInteger(value)) {
                return value.toString();
            }
        });
        delete auditTrail.data;
        const response = await this.elasticLibrary.indexOrUpdate({
            index: this.getIndex(sourceName),
            body: {
                '@timestamp': moment().locale('id').toISOString(),
                source: AuditTrail.SERVICE_NAME,
                ...auditTrail,
                data,
            },
        });
        if (!isCreated) {
            await this.elasticLibrary.indicesPutSettings({
                index: this.getIndex(sourceName),
                flat_settings: true,
                body: {
                    'index.mapping.total_fields.limit': '3000',
                },
            });
        }
        return response;
    }

    private async checkIndex(indexName: string): Promise<boolean> {
        let isCreated: boolean;
        try {
            const indexList = await this.elasticLibrary.indicesGet({
                index: indexName,
            });
            if (indexList) {
                isCreated = true;
            } else {
                isCreated = false;
            }
        } catch (e) {
            console.log(e.message);
            isCreated = false;
        }
        return isCreated;
    }

    public async email(logEmail: LogEmailInterface): Promise<ResultIndexorUpdateResponse> {
        return await this.elasticLibrary.indexOrUpdate({
            index: this.getIndexLogEmail(),
            body: {
                '@timestamp': moment().locale('id').toISOString(),
                source: AuditTrail.SERVICE_NAME,
                ...logEmail,
            },
        });
    }
}

export { AuditTrail, DataType };
