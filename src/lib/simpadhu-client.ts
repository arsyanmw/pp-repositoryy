import axios from 'axios';
import * as FormData from 'form-data';

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

    private static async post(path, form, headers) {
        try {
            return await axios.post(SimpadhuClient.host + path, form, { headers: headers });
        } catch (e) {
            console.log(e.message);
            console.log(e.response);
            return e.response;
        }
    }

    private static async getToken() {
        const form = new FormData();
        form.append('key', SimpadhuClient.key);

        return await SimpadhuClient.post('/auth/generateSign', form, form.getHeaders());
    }

    public static async validate(data: ValidationRequest) {
        const resp = await SimpadhuClient.getToken();
        console.log('Response generateSign, HTTP Code: ', resp.status, ' Response Body: ', resp.data);
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

        const form = new FormData();
        form.append('no_voucher', data.voucher);
        form.append('id_produk', data.idProduk || 40);
        form.append('tipe_transaksi', data.tipeTransaksi || 60);
        form.append('id_mapping', data.idMapping || 1);

        const validationResp = await SimpadhuClient.post(
            '/service/kodePembayaran?sign=' + resp.data.value,
            form,
            form.getHeaders(),
        );
        console.log(
            'Response validasi voucher, HTTP Code: ',
            validationResp.status,
            ' Response Body: ',
            validationResp.data,
        );

        return validationResp;
    }

    public static async redeem(data: RedeemRequest) {
        const resp = await SimpadhuClient.getToken();
        console.log('Response generateSign, HTTP Code: ', resp.status, ' Response Body: ', resp.data);
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

        const form = new FormData();
        form.append('kode_pembayaran', data.voucher);
        form.append('nomor_transaksi', data.trxNumber);
        form.append('id_produk', data.idProduk || 40);
        form.append('tipe_transaksi', data.tipeTransaksi || 60);
        form.append('id_mapping', data.idMapping || 1);

        const redeemResp = await SimpadhuClient.post(
            '/service/updateTerpakaiMapping?sign=' + resp.data.value,
            form,
            form.getHeaders(),
        );
        console.log('Response redeem voucher, HTTP Code: ', redeemResp.status, ' Response Body: ', redeemResp.data);

        return redeemResp;
    }
}

export { SimpadhuClient };
