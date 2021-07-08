/* eslint @typescript-eslint/no-var-requires: "off" */
import axios from 'axios';
import { forOwn } from 'lodash';

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

interface BeneficialOwnerServiceInterface {
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
    private static readonly host: string = process.env.BENEFICIAL_OWNER_HOST || 'http://staging-bo.ahu.go.id';
    private static readonly client: string = process.env.BENEFICIAL_OWNER_CLIENT_ID || 'tes-api-bo';
    private static readonly clientKey: string = process.env.BENEFICIAL_OWNER_CLIENT_SECRET || '123456';

    private static async post(path, headers, body, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            return await axios.post(BeneficialOwnerClient.host + path + paramUri, body, {
                headers: headers,
                timeout: 10000,
            });
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

            return await axios.get(BeneficialOwnerClient.host + path + paramUri, { headers: headers, timeout: 10000 });
        } catch (e) {
            console.log(e.message);
            console.log(e.response);
            return e.response;
        }
    }
}

export { BeneficialOwnerServiceInterface, TransaksiBeneficialOwnerInterface, BeneficialOwnerClient };
