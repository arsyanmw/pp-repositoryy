interface submitRegistrationBussinessOwner {
    statusPj: string;
    namaPj: string;
    jabatanPj: string;
    kdNegaraPj: string;
    nomorIdPj: string;
    npwpPj: string;
    alamatPj: string;
    rtPj: string;
    rwPj: string;
    kelurahanPj: string;
    kecamatanPj: string;
    kodePosPj: string;
    dati2Pj: string;
    dati1Pj: string;
    kodeWilayahPj: string;
    nomorTeleponPj: string;
    faksimiliPj?: string;
    nomorHpPj: string;
    emailPemilik: string;
    nomorKitasPj?: string;
    modalPj?: string;
    ketJabPj: string;
}
interface submitRegistrationNpwpPpParams {
    userIdNotaris: number;
    nomorTransaksi: string;
    nomorSkPengesahan: string;
    namaPerseroan: string;
    jenisPemodalan: string;
    kodeWilayah: string;
    alamat: string;
    rt: string;
    rw: string;
    nomorTelepon: string;
    nomorFax?: string;
    email: string;
    aktaTmp: string;
    aktaTgl: string;
    nomorAkta: string;
    namaNotaris: string;
    thBukuAwal: number;
    thBukuAkhir: number;
    jenisUsaha: string;
    klu: string;
    merek?: string;
    dataPengurus?: submitRegistrationBussinessOwner[];
}
declare class DjpClient {
    private static readonly byPassNpwp;
    private static readonly environment;
    private static readonly host;
    private static readonly clientId;
    private static readonly clientSecret;
    private static readonly username;
    private static readonly password;
    private static post;
    private static get;
    private static getToken;
    static validateNpwp(npwp: string): Promise<any>;
    static submitRegistrationNpwpPp(body: submitRegistrationNpwpPpParams): Promise<any>;
}
export { DjpClient, submitRegistrationNpwpPpParams };
