import axios from 'axios';
import { forOwn } from 'lodash';

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

    private static async post(path, headers, body, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            return await axios.post(KswpClient.host + path + paramUri, body, { headers: headers, timeout: 10000 });
        } catch (e) {
            console.log(e.message);
            console.log(e.response);
            return e.response;
        }
    }

    private static async get(path: string, headers: any, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            return await axios.get(KswpClient.host + path + paramUri, { headers: headers, timeout: 10000 });
        } catch (e) {
            console.log(e.message);
            console.log(e.response);
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
        console.log('Response getToken KSWP, HTTP Code: ', token.status, ' Response Body: ', token.data);
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
        console.log('Response Validate Npwp KSWP, HTTP Code: ', response.status, ' Response Body: ', response.data);

        return response;
    }
}

export { KswpClient };
