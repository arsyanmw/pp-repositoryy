import axios from 'axios';
import { forOwn, toString, unset, findIndex } from 'lodash';
import { Logger } from './logger';
import * as moment from 'moment';
import { RedisConnect } from './redis-connect';
import { performance } from 'perf_hooks';

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

class DjpClient {
    private static readonly byPassNpwp: RegExp = new RegExp('5000000000.....');
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';

    private static readonly host: string = process.env.DJP_HOST || 'https://sim-apidjp.pajak.go.id';
    private static readonly clientId: string = process.env.DJP_CLIENT_ID || 'APIX-DJP-180515-X001';
    private static readonly clientSecret: string = process.env.DJP_CLIENT_SECRET || 'BR2JH-LA8PF-FQKV7-SIW5G';
    private static readonly username: string = process.env.DJP_USERNAME || 'AHU-20180504001-U001';
    private static readonly password: string = process.env.DJP_PASSWORD || 'TGHY-UJKL-87JK-RF54-GFYL';
    private static readonly redis: RedisConnect = new RedisConnect(10);
    private static readonly logger: Logger = new Logger();

    private static async post(path, headers, body, params: any = {}) {
        try {
            let paramUri = '';
            forOwn(params, (value, key) => {
                paramUri += paramUri == '' ? `?${key}=${value}` : `&${key}=${value}`;
            });

            const start = performance.now();
            const endPoint: string = DjpClient.host + path + paramUri;
            const result = await axios.post(endPoint, body, {
                headers: headers,
                timeout: 10000,
            });
            const end = performance.now();
            unset(params, 'username');
            unset(params, 'password');
            DjpClient.logger.eInfo(`DjpClient:post:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                bodyDataDjpClient: typeof body == 'object' ? body : { resultNotObject: toString(body) },
                paramsDataDjpClient: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultDataDjpClient:
                    typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });

            return result;
        } catch (e) {
            DjpClient.logger.eError(`DjpClient:post:${path}`, { message: e.message });
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
            const endPoint: string = DjpClient.host + path + paramUri;
            const result = await axios.get(endPoint, { headers: headers, timeout: 10000 });
            const end = performance.now();
            unset(params, 'username');
            unset(params, 'password');
            DjpClient.logger.eInfo(`DjpClient:get:${path}`, {
                timeExecution: `${(end - start).toFixed(2)} milliseconds.`,
                endPoint,
                paramsDataDjpClient: typeof params == 'object' ? params : { resultNotObject: toString(params) },
                resultDataDjpClient:
                    typeof result.data == 'object' ? result.data : { resultNotObject: toString(result.data) },
                status: result.status,
            });
            return result;
        } catch (e) {
            DjpClient.logger.eError(`DjpClient:get:${path}`, { message: e.message });
            return e.response;
        }
    }

    private static async getToken() {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + Buffer.from(DjpClient.clientId + ':' + DjpClient.clientSecret).toString('base64'),
        };

        const params = {
            username: DjpClient.username,
            password: DjpClient.password,
            grant_type: 'password',
        };

        return await DjpClient.post('/auth/oauth/token', headers, {}, params);
    }

    private static async getNikFakeFromRedis(npwp: string): Promise<any> {
        let nikFake: string;
        const testList = (await DjpClient.redis.getJson('test:dukcapil_list')) || [];
        const regexNpwp = new RegExp([npwp.slice(0, 1), '.', npwp.slice(1)].join(''));
        const findOnList = findIndex(testList, (index) => regexNpwp.test(index));
        if (testList[findOnList]) {
            nikFake = testList[findOnList];
        }
        if (DjpClient.byPassNpwp.test(npwp)) {
            nikFake = `50000000000${npwp.substring(10)}`;
        }
        return nikFake;
    }

    public static async validateNpwp(npwp: string) {
        const token = await DjpClient.getToken();
        if (token.status != 200) {
            return token;
        }

        if (this.environment.toLowerCase() != 'production') {
            const nikFake = await DjpClient.getNikFakeFromRedis(npwp);
            if (nikFake) {
                return {
                    status: 200,
                    data: {
                        kdStatus: 1,
                        message: {
                            npwp: '',
                            status: '',
                            nama: '',
                            nik: nikFake,
                            kdJnsWp: '',
                        },
                    },
                };
            }
        }

        const headers = {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + token.data.access_token,
        };

        return await DjpClient.get(`/api/getwpbynpwp/${npwp}`, headers);
    }

    public static async submitRegistrationNpwpPp(body: submitRegistrationNpwpPpParams) {
        const token = await DjpClient.getToken();
        if (token.status != 200) {
            return token;
        }
        const npwp = body.dataPengurus[0].npwpPj;

        if (this.environment.toLowerCase() != 'production') {
            const nikFake = await DjpClient.getNikFakeFromRedis(npwp);
            if (nikFake) {
                return {
                    status: 200,
                    data: {
                        kdStatus: 1,
                        ketStatus: 'Registration Succeed',
                        message: {
                            npwp: `915${npwp.substring(10)}8068000`,
                            kodeKpp: '068',
                            namaKpp: 'PRATAMA JAKARTA JAGAKARSA',
                        },
                        createdDate: moment().locale('id').format('DD-MM-YYYY'),
                    },
                };
            }
        }

        const headers = {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + token.data.access_token,
        };

        return await DjpClient.post('/api/submitregptp', headers, body);
    }
}

export { DjpClient, submitRegistrationNpwpPpParams };
