"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DukcapilClient = void 0;
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var logger_1 = require("./logger");
var moment = require("moment");
var redis_connect_1 = require("./redis-connect");
var perf_hooks_1 = require("perf_hooks");
var nikVerifByElementResult = function (nik) { return ({
    status: 200,
    data: {
        content: [
            {
                NO_KK: 'Sesuai',
                NIK: nik,
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
}); };
var DukcapilClient = /** @class */ (function () {
    function DukcapilClient() {
    }
    DukcapilClient.post = function (path, headers, body, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_1, start, endPoint, result, end, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_1 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_1 += paramUri_1 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        start = perf_hooks_1.performance.now();
                        endPoint = DukcapilClient.host + path + paramUri_1;
                        return [4 /*yield*/, axios_1.default.post(endPoint, body, {
                                headers: headers,
                                timeout: 10000,
                            })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        lodash_1.unset(body, 'USER_ID');
                        lodash_1.unset(body, 'PASSWORD');
                        DukcapilClient.logger.eInfo("DukcapilClient:post:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            bodyData: typeof body == 'object' ? body : { resultNotObject: lodash_1.toString(body) },
                            paramsData: typeof params == 'object' ? params : { resultNotObject: lodash_1.toString(params) },
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        DukcapilClient.logger.eError("DukcapilClient:post:" + path, { message: e_1.message });
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DukcapilClient.get = function (path, headers, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_2, start, endPoint, result, end, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_2 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_2 += paramUri_2 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        start = perf_hooks_1.performance.now();
                        endPoint = DukcapilClient.host + path + paramUri_2;
                        return [4 /*yield*/, axios_1.default.get(endPoint, { headers: headers, timeout: 10000 })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        DukcapilClient.logger.eInfo("DukcapilClient:get:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            paramsData: typeof params == 'object' ? params : { resultNotObject: lodash_1.toString(params) },
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_2 = _a.sent();
                        DukcapilClient.logger.eError("DukcapilClient:get:" + path, { message: e_2.message });
                        return [2 /*return*/, e_2.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DukcapilClient.nikVerifByElement = function (requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var testList, headers, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.environment.toLowerCase() != 'production')) return [3 /*break*/, 2];
                        return [4 /*yield*/, DukcapilClient.redis.getJson('test:dukcapil_list')];
                    case 1:
                        testList = _a.sent();
                        if (!lodash_1.includes(testList, requestBody.nik)) {
                            return [2 /*return*/, nikVerifByElementResult(requestBody.nik)];
                        }
                        _a.label = 2;
                    case 2:
                        headers = {
                            'content-type': 'application/json',
                        };
                        body = lodash_1.pickBy({
                            USER_ID: DukcapilClient.userId,
                            PASSWORD: DukcapilClient.password,
                            IP_USER: requestBody.trackingParam ? "PP:" + requestBody.trackingParam : undefined,
                            TRESHOLD: requestBody.threshold,
                            NAMA_LGKP: requestBody.fullName,
                            NIK: requestBody.nik,
                            TGL_LHR: requestBody.birthDate
                                ? moment(requestBody.birthDate).locale('id').format('DD-MM-YYYY')
                                : undefined,
                            TMPT_LHR: requestBody.birthPlace,
                            ALAMAT: requestBody.address,
                            NO_PROP: requestBody.provinceCode,
                            NO_KAB: requestBody.cityCode,
                            NO_KEC: requestBody.districtCode,
                            NO_KEL: requestBody.subDistrictCode,
                            NO_RT: requestBody.addressRt,
                            NO_RW: requestBody.addressRw,
                        }, lodash_1.Identity);
                        return [4 /*yield*/, DukcapilClient.post('/dukcapil/get_json/ditjen_ahu/nik_verifby_elemen', headers, body)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DukcapilClient.environment = process.env.ENVIRONMENT || 'development';
    DukcapilClient.host = process.env.DUKCAPIL_HOST || 'http://127.0.0.1';
    DukcapilClient.userId = process.env.DUKCAPIL_CLIENT_ID || 'userId';
    DukcapilClient.password = process.env.DUKCAPIL_PASSWORD || 'password';
    DukcapilClient.redis = new redis_connect_1.RedisConnect(10);
    DukcapilClient.logger = new logger_1.Logger();
    return DukcapilClient;
}());
exports.DukcapilClient = DukcapilClient;
//# sourceMappingURL=dukcapil-client.js.map