import axios from 'axios';
import { forOwn, toString, unset, pickBy, Identity, includes } from 'lodash';
import { Logger } from './logger';
import * as moment from 'moment';
import { RedisConnect } from './redis-connect';

interface nikVerifByElementParams {
    trackingParam?: string; //IP_USER
    threshold?: string; //TRESHOLD
    fullName?: string; //NAMA_LGKP
    nik: string; //NIK
    birthDate?: Date; // TGL_LHR" : "DD-MM-YYYY"
    birthPlace?: string; //TMPT_LHR
    address?: string; // ALAMAT
    provinceCode?: number; //NO_PROP
    cityCode?: number; //NO_KAB
    districtCode?: number; //NO_KEC
    subDistrictCode?: number; //NO_KEL
    addressRt?: number; //NO_RT
    addressRw?: number; //NO_RW
}

class DukcapilClient {
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';

    private static readonly host: string = process.env.DUKCAPIL_HOST || 'http://127.0.0.1';
    private static readonly userId: string = process.env.DUKCAPIL_CLIENT_ID || 'userId';
    private static readonly password: string = process.env.DUKCAPIL_PASSWORD || 'password';
    private static readonly redis: RedisConnect = new RedisConnect(10);
    private static readonly logger: Logger = new Logger();

    private static async post(path, headers, body, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const result = await axios.post(DukcapilClient.host + path + paramUri, body, {
                headers: headers,
                timeout: 10000,
            });

            unset(body, 'USER_ID');
            unset(body, 'PASSWORD');
            DukcapilClient.logger.eInfo(`DukcapilClient:post:${path}`, {
                bodyData: typeof body == 'object' ? body : { resultNotObject: toString(body) },
                paramsData: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });

            return result;
        } catch (e) {
            DukcapilClient.logger.eError(`DukcapilClient:post:${path}`, { message: e.message });
            return e.response;
        }
    }

    private static async get(path: string, headers: any, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const result = await axios.get(DukcapilClient.host + path + paramUri, { headers: headers, timeout: 10000 });
            DukcapilClient.logger.eInfo(`DukcapilClient:get:${path}`, {
                paramsData: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            DukcapilClient.logger.eError(`DukcapilClient:get:${path}`, { message: e.message });
            return e.response;
        }
    }

    public static async nikVerifByElement(requestBody: nikVerifByElementParams) {
        if (this.environment.toLowerCase() != 'production') {
            const testList = await DukcapilClient.redis.getJson('test:dukcapil_list');
            if (!includes(testList, requestBody.nik)) {
                return {
                    status: 200,
                    data: {
                        content: [
                            {
                                NO_KK: 'Sesuai',
                                NIK: requestBody.nik,
                                NAMA_LGKP: 'Sesuai (100)',
                                AGAMA: 'Sesuai',
                                KAB_NAME: 'Sesuai',
                                JENIS_PKRJN: 'Sesuai',
                                KEC_NAME: 'Sesuai',
                                NO_RW: 'Sesuai',
                                NO_KEL: 'Sesuai',
                                NO_RT: 'Sesuai',
                                ALAMAT: 'Sesuai (100)',
                                NO_KEC: 'Sesuai',
                                TMPT_LHR: 'Sesuai (100)',
                                STATUS_KAWIN: 'Sesuai',
                                NO_PROP: 'Sesuai',
                                PROP_NAME: 'Sesuai',
                                NO_KAB: 'Sesuai',
                                TGL_LHR: 'Sesuai',
                                JENIS_KLMIN: 'Sesuai',
                                KEL_NAME: 'Sesuai',
                            },
                        ],
                        lastPage: true,
                        numberOfElements: 1,
                        sort: null,
                        totalElements: 1,
                        firstPage: true,
                        number: 0,
                        size: 1,
                    },
                };
            }
        }

        const headers = {
            'content-type': 'application/json',
        };

        const body = pickBy(
            {
                USER_ID: DukcapilClient.userId,
                PASSWORD: DukcapilClient.password,
                IP_USER: requestBody.trackingParam,
                TRESHOLD: requestBody.threshold,
                NAMA_LGKP: requestBody.fullName,
                NIK: requestBody.nik,
                TGL_LHR: moment(requestBody.birthDate).locale('id').format('DD-MM-YYYY'),
                TMPT_LHR: requestBody.birthPlace,
                ALAMAT: requestBody.address,
                NO_PROP: requestBody.provinceCode,
                NO_KAB: requestBody.cityCode,
                NO_KEC: requestBody.districtCode,
                NO_KEL: requestBody.subDistrictCode,
                NO_RT: requestBody.addressRt,
                NO_RW: requestBody.addressRw,
            },
            Identity,
        );

        return await DukcapilClient.post('/dukcapil/get_json/ditjen_ahu/nik_verifby_elemen', headers, body);
    }
}

export { DukcapilClient };
