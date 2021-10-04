import axios from 'axios';
import { forOwn, toString } from 'lodash';
import { Logger } from './logger';
import { performance } from 'perf_hooks';

export enum enumPpPermissionCode {
    PP01 = 'PP01',
    PP02 = 'PP02',
    PP03 = 'PP03',
}

class KswpClient {
    private static readonly byPassNpwp: RegExp = new RegExp('915.....8068000');
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';

    private static readonly host: string = process.env.KSWP_HOST || 'https://ws.pajak.go.id';

    private static readonly username: string = process.env.KSWP_USERNAME || 'ditjenahu';
    private static readonly password: string = process.env.KSWP_PASSWORD || 'YY28iPB9h';
    private static readonly logger: Logger = new Logger();

    private static async post(path, headers, body, params: any = {}) {
        let paramUri = '';
        forOwn(params, (value, key) => {
            paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
        });

        const start = performance.now();
        const endPoint: string = KswpClient.host + path + paramUri;
        try {
            const result = await axios.post(endPoint, body, {
                headers: headers,
                timeout: 10000,
            });
            const end = performance.now();

            KswpClient.logger.eInfo(`KswpClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                bodyDataKswpClient: typeof body == 'object' ? body : { resultNotObject: toString(body) },
                paramsDataKswpClient: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultDataKswpClient:
                    typeof result.data == 'object'
                        ? { resultNotObject: JSON.stringify(result.data) }
                        : { resultNotObject: toString(result.data) },
                status: result.status,
            });

            return result;
        } catch (e) {
            const end = performance.now();
            KswpClient.logger.eError(`KswpClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                message: e.message,
            });
            return e.response;
        }
    }

    private static async get(path: string, headers: any, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const start = performance.now();
            const endPoint: string = KswpClient.host + path + paramUri;
            const result = await axios.get(endPoint, { headers: headers, timeout: 10000 });
            const end = performance.now();
            KswpClient.logger.eInfo(`KswpClient:get:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                paramsDataKswpClient: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultDataKswpClient:
                    typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            KswpClient.logger.eError(`KswpClient:get:${path}`, { message: e.message });
            return e.response;
        }
    }

    private static async getToken() {
        const headers = {
            'content-type': 'application/json',
        };

        const params = {
            user: KswpClient.username,
            pwd: KswpClient.password,
        };

        return await KswpClient.post('/djp/token', headers, {}, params);
    }

    public static async validateNpwpPp(
        npwp: string,
        ppPermissionCode: enumPpPermissionCode,
        perseroanName: string = null,
    ) {
        const token = await KswpClient.getToken();
        if (token.status != 200) {
            return token;
        }

        if (this.environment.toLowerCase() != 'production' && KswpClient.byPassNpwp.test(npwp)) {
            const generateNpwp: string = npwp.substring(10);
            const generatePpName: Array<any> = generateNpwp.split('');
            generatePpName.forEach(function (value, index, array) {
                array[index] = String.fromCharCode(65 + parseInt(value));
            });

            return {
                status: 200,
                data: {
                    status: 200,
                    message: {
                        status: 'VALID',
                        NPWP: `915${generateNpwp}8068000`,
                        nama: perseroanName,
                    },
                },
            };
        }

        const headers = {
            'content-type': 'application/json',
            Authorization: token.data.message,
        };

        const body = {
            npwp: npwp,
            kdizin: ppPermissionCode,
        };

        const response = await KswpClient.post(`/djp/kswp`, headers, body);

        return response;
    }
}

export { KswpClient };
