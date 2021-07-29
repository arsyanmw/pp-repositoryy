/* eslint @typescript-eslint/no-var-requires: "off" */
import axios from 'axios';
import { forOwn, toString } from 'lodash';
import * as FormData from 'form-data';
import { RedisConnect } from './redis-connect';
import { Logger } from './logger';
interface TransaksiBeneficialOwnerInterface {
    nama_lengkap: string;
    id_jenis_identitas: number;
    nomor_identitas: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    id_kewarganegaraan: number;
    kode_negara: string | null;
    nama_negara: string | null;
    kode_provinsi: string | null;
    kode_kabupaten: string | null;
    kode_kecamatan: string | null;
    kode_kelurahan: string | null;
    rt: string | null;
    rw: string | null;
    alamat: string;
    npwp: string;
    hubungan_bo: string;
    kriteria: any;
}

interface BeneficialOwnerTransactionInterface {
    transaksi_korporasi: {
        npwp: string;
        nama_korporasi: string;
        kode_lembaga: string;
        nama_lengkap: string;
        no_identitas: string;
        kode_provinsi: string;
        kode_kabupaten: string;
        kode_kecamatan: string;
        id_master_sumber: string;
    };
    transaksi_bo?: Array<TransaksiBeneficialOwnerInterface>;
}

class BeneficialOwnerClient {
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';

    private static readonly host: string = process.env.BENEFICIAL_OWNER_HOST || 'https://staging-bo.ahu.go.id';
    private static readonly client: string = process.env.BENEFICIAL_OWNER_CLIENT_ID || 'tes-api-bo';
    private static readonly clientKey: string = process.env.BENEFICIAL_OWNER_CLIENT_SECRET || '123456';
    private static readonly redis: RedisConnect = new RedisConnect(10);
    private static readonly logger: Logger = new Logger();

    private static async post(path, headers, body, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const config = {
                headers,
                timeout: 10000,
            };

            const result = await axios.post(BeneficialOwnerClient.host + path + paramUri, body, config);
            BeneficialOwnerClient.logger.eInfo(`BeneficialOwnerClient:post:${path}`, {
                bodyData: typeof body == 'object' ? body : { resultNotObject: toString(body) },
                paramsData: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            BeneficialOwnerClient.logger.eError(`BeneficialOwnerClient:post:${path}`, { message: e.message });
            return e.response;
        }
    }

    private static async get(path: string, headers: any, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const config = {
                headers,
                timeout: 10000,
            };

            const result = await axios.get(BeneficialOwnerClient.host + path + paramUri, config);
            BeneficialOwnerClient.logger.eInfo(`BeneficialOwnerClient:get:${path}`, {
                paramsData: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultData: typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            BeneficialOwnerClient.logger.eError(`BeneficialOwnerClient:get:${path}`, { message: e.message });
            return e.response;
        }
    }

    private static async getToken() {
        const form = new FormData();
        form.append('client', BeneficialOwnerClient.client);
        form.append('clientKey', BeneficialOwnerClient.clientKey);

        const key = 'BO:token';
        const cache = await BeneficialOwnerClient.redis.getJson(key);
        if (cache) {
            return cache;
        } else {
            const result = await BeneficialOwnerClient.post('/service/getToken', form.getHeaders(), form);
            if (result.status == 200 && result.data.status == 'success') {
                BeneficialOwnerClient.redis.setJson(key, { data: result.data, status: result.status }, 'EX', 60 * 20);
                return result;
            }
            return result;
        }
    }

    public static async transaction(body: BeneficialOwnerTransactionInterface) {
        const token = await BeneficialOwnerClient.getToken();
        if (token.status != 200 && token.data.status != 'success') {
            return token;
        }

        const headers = {
            'content-type': 'application/json',
            'auth-jwt': 'Bearer ' + token.data.data,
        };

        return await BeneficialOwnerClient.post('/service/transaksi', headers, body);
    }
}

export { BeneficialOwnerTransactionInterface, TransaksiBeneficialOwnerInterface, BeneficialOwnerClient };
