interface TransaksiBoInterface {
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
    transaksi_bo?: Array<TransaksiBoInterface>;
}
declare class BeneficialOwnerClient {
    private static readonly host;
    private static readonly client;
    private static readonly clientKey;
    private static post;
    private static get;
}
export { BeneficialOwnerServiceInterface, TransaksiBoInterface, BeneficialOwnerClient };
