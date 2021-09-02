import axios from 'axios';
import * as FormData from 'form-data';
import { toString } from 'lodash';
import { Logger } from './logger';
import { performance } from 'perf_hooks';

class PtClient {
    private static readonly host: string = process.env.PT_HOST || 'https://AHU2021:ceban1@staging-ahuonline.ahu.go.id';
    private static readonly client: string = process.env.PT_CLIENT || 'hdti';
    private static readonly clientKey: string = process.env.PT_CLIENT_KEY || '4hu@hd2021';
    private static readonly timeout: number = 20 * 1000; // 20 detik
    private static readonly logger: Logger = new Logger();

    private static async post(
        path,
        dataForm: Array<{ key: string; value: any }> = [],
        headers: (from: FormData) => FormData.Headers,
    ) {
        try {
            const form = new FormData();
            for await (const iterator of dataForm) {
                form.append(iterator.key, iterator.value);
            }

            const start = performance.now();
            const endPoint: string = PtClient.host + path;
            const result = await axios.post(endPoint, form, {
                headers: headers(form),
                timeout: this.timeout,
            });
            const end = performance.now();

            PtClient.logger.eInfo(`PtClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                formData: dataForm,
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            PtClient.logger.eError(`PtClient:post:${path}`, {
                code: e.code,
                message: e.message,
            });
            return {
                status: e.code == 'ECONNABORTED' ? 501 : 500,
                code: e.code,
                data: {
                    message: e.message,
                    response: e.response,
                },
            };
        }
    }

    private static async getToken() {
        return await PtClient.post(
            '/service/getToken',
            [
                { key: 'client', value: PtClient.client },
                { key: 'clientKey', value: PtClient.clientKey },
            ],
            (form: FormData): FormData.Headers => form.getHeaders(),
        );
    }

    public static async validate(name: string, alias: string) {
        const resp = await PtClient.getToken();
        if (resp.status != 200) {
            return resp;
        }

        return await PtClient.post(
            '/service/getPesanNamaPerseroan',
            [
                { key: 'nama', value: name },
                { key: 'nama_singkat', value: alias },
            ],
            (form: FormData): FormData.Headers => ({
                'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
                AuthJWT: 'Bearer ' + resp.data.data.token,
            }),
        );
    }
}

export { PtClient };
