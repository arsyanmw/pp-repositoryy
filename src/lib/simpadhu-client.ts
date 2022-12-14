import axios from 'axios';
import * as FormData from 'form-data';
import { toString } from 'lodash';
import { Logger } from './logger';
import { performance } from 'perf_hooks';
interface DefaultRequest {
    idProduk?: number;
    tipeTransaksi?: number;
    idMapping?: number;
}
export interface ValidationRequest extends DefaultRequest {
    voucher: string;
}
export interface RedeemRequest extends DefaultRequest {
    voucher: string;
    trxNumber: string;
}
class SimpadhuClient {
    // for bypassing voucher validation, testing purpose
    private static readonly byPassVoucher: string = '000000000001';

    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private static readonly host: string = process.env.SIMPADHU_HOST || 'http://simpadhu.svc';
    private static readonly key: string = process.env.SIMPADHU_KEY || '14211c2b599e50e6f0b069beb8c0477c';
    private static readonly timeout: number = 30 * 1000; // 30 detik
    private static readonly logger: Logger = new Logger();

    private static async post(path, dataForm: Array<{ key: string; value: any }> = []) {
        const form = new FormData();
        for await (const iterator of dataForm) {
            form.append(iterator.key, iterator.value);
        }
        const start = performance.now();
        const endPoint: string = SimpadhuClient.host + path;
        try {
            const result = await axios.post(endPoint, form, {
                headers: form.getHeaders(),
                timeout: SimpadhuClient.timeout,
            });
            const end = performance.now();
            SimpadhuClient.logger.eInfo(`SimpadhuClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                formDataSimpadhuClient: dataForm,
                resultDataSimpadhuClient:
                    typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            const end = performance.now();
            SimpadhuClient.logger.eError(`SimpadhuClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                formDataSimpadhuClient: dataForm,
                message: e.message,
            });
            return e.response;
        }
    }

    private static async getToken() {
        return await SimpadhuClient.post('/auth/generateSign', [{ key: 'key', value: SimpadhuClient.key }]);
    }

    public static async validate(data: ValidationRequest) {
        const resp = await SimpadhuClient.getToken();
        if (resp.data.status != 200) {
            return resp;
        }

        if (this.environment.toLowerCase() != 'production' && data.voucher == SimpadhuClient.byPassVoucher) {
            return {
                data: {
                    status: 200,
                    message: 'SUCCESS',
                    value: 1,
                },
            };
        }

        const validationResp = await SimpadhuClient.post('/service/kodePembayaran?sign=' + resp.data.value, [
            {
                key: 'no_voucher',
                value: data.voucher,
            },
            {
                key: 'id_produk',
                value: data.idProduk || 40,
            },
            {
                key: 'tipe_transaksi',
                value: data.tipeTransaksi || 60,
            },
            {
                key: 'id_mapping',
                value: data.idMapping || 1,
            },
        ]);

        return validationResp;
    }

    public static async redeem(data: RedeemRequest) {
        const resp = await SimpadhuClient.getToken();
        if (resp.data.status != 200) {
            return resp;
        }

        if (this.environment.toLowerCase() != 'production' && data.voucher == SimpadhuClient.byPassVoucher) {
            return {
                data: {
                    status: 200,
                    message: 'SUCCESS',
                    value: 1,
                },
            };
        }

        const redeemResp = await SimpadhuClient.post('/service/updateTerpakaiMapping?sign=' + resp.data.value, [
            {
                key: 'kode_pembayaran',
                value: data.voucher,
            },
            {
                key: 'nomor_transaksi',
                value: data.trxNumber,
            },
            {
                key: 'id_produk',
                value: data.idProduk || 40,
            },
            {
                key: 'tipe_transaksi',
                value: data.tipeTransaksi || 60,
            },
            {
                key: 'id_mapping',
                value: data.idMapping || 1,
            },
        ]);

        return redeemResp;
    }
}

export { SimpadhuClient };
