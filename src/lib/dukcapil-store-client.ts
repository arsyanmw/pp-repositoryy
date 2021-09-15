import axios from 'axios';
import * as FormData from 'form-data';
import { toString } from 'lodash';
import { Logger } from './logger';
import { performance } from 'perf_hooks';

interface StoreParamData {
    NO_AKTA: string;
    DESKRIPSI: string;
}
export interface StoreRequest {
    nik: string;
    idLembaga?: string;
    namaLembaga?: string;
    param: Array<StoreParamData>;
}
class DukcapilStoreClient {
    private static readonly host: string = process.env.DUKCAPIL_STORE_HOST || 'http://127.0.0.1';
    private static readonly key: string = process.env.DUKCAPIL_STORE_KEY || 'key';
    private static readonly logger: Logger = new Logger();

    private static async post(path, dataForm: Array<{ key: string; value: any }> = []) {
        const form = new FormData();
        for await (const iterator of dataForm) {
            form.append(iterator.key, iterator.value);
        }
        const start = performance.now();
        const endPoint: string = DukcapilStoreClient.host + path;
        try {
            const result = await axios.post(endPoint, form, {
                headers: {
                    Authorization: `Bearer ${DukcapilStoreClient.key}`,
                    ...form.getHeaders(),
                },
            });
            const end = performance.now();
            DukcapilStoreClient.logger.eInfo(`DukcapilStoreClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                formData: dataForm,
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            const end = performance.now();
            const logData = {
                errorMessage: e.message,
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                formData: dataForm,
            };
            if (e.response) {
                logData['status'] = e.response.status;
                if (e.response.data) {
                    logData['resultData'] = { resultNotObject: toString(e.response.data) };
                }
            }
            DukcapilStoreClient.logger.eError(`DukcapilStoreClient:post:${path}`, logData);
            return e.response;
        }
    }

    public static async store(data: StoreRequest) {
        const validationResp = await DukcapilStoreClient.post('/databalikan/api/store', [
            {
                key: 'nik',
                value: data.nik,
            },
            {
                key: 'id_lembaga',
                value: data.idLembaga || '010028',
            },
            {
                key: 'nama_lembaga',
                value: data.namaLembaga || 'DIREKTORAT JENDERAL ADMINISTRASI HUKUM UMUM, KEMENKUMHAM',
            },
            {
                key: 'param',
                value: JSON.stringify(data.param),
            },
        ]);

        return validationResp;
    }
}

export { DukcapilStoreClient };
