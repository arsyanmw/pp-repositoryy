import { BeneficialOwnerClient } from '../lib/beneficial-owner-client';
const transactionOwner = BeneficialOwnerClient.transaction({
    transaksi_korporasi: {
        npwp: '915329108068000',
        nama_korporasi: 'LIMA RODA ABADI',
        kode_lembaga: '07',
        nama_lengkap: 'Bilal satar',
        no_identitas: '5000000000032910',
        kode_provinsi: '11',
        kode_kabupaten: '11.08',
        kode_kecamatan: '11.08.20',
        id_master_sumber: '2',
    },
    transaksi_bo: [
        {
            nama_lengkap: 'Bilal satar',
            id_jenis_identitas: 1,
            nomor_identitas: '5000000000032910',
            tempat_lahir: 'Bogor',
            tanggal_lahir: '1989-05-19',
            id_kewarganegaraan: 1,
            kode_negara: null,
            nama_negara: null,
            kode_provinsi: '35',
            kode_kabupaten: '35.73',
            kode_kecamatan: '35.73.03',
            kode_kelurahan: '3573031006',
            rt: null,
            rw: null,
            alamat: 'Jalan danau ranau 8',
            npwp: '500000000032910',
            hubungan_bo: 'Pemilik Usaha',
            kriteria: {
                A: '',
                B: '',
            },
        },
        {
            nama_lengkap: 'Mike breeze',
            id_jenis_identitas: 3,
            nomor_identitas: 'AU90012',
            tempat_lahir: 'Melboune',
            tanggal_lahir: '1973-08-29',
            id_kewarganegaraan: 2,
            kode_negara: 'AU',
            nama_negara: 'Australia',
            kode_provinsi: null,
            kode_kabupaten: null,
            kode_kecamatan: null,
            kode_kelurahan: null,
            rt: null,
            rw: null,
            alamat: 'orchard street',
            npwp: '434343444114111',
            hubungan_bo: 'Majikan',
            kriteria: {
                E: '',
                G: '',
            },
        },
    ],
});

transactionOwner.then((res) => {
    console.log(res);
});
