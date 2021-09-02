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
exports.DjpClient = void 0;
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var logger_1 = require("./logger");
var moment = require("moment");
var redis_connect_1 = require("./redis-connect");
var perf_hooks_1 = require("perf_hooks");
var DjpClient = /** @class */ (function () {
    function DjpClient() {
    }
    DjpClient.post = function (path, headers, body, params) {
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
                        endPoint = DjpClient.host + path + paramUri_1;
                        return [4 /*yield*/, axios_1.default.post(endPoint, body, {
                                headers: headers,
                                timeout: 10000,
                            })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        lodash_1.unset(params, 'username');
                        lodash_1.unset(params, 'password');
                        DjpClient.logger.eInfo("DjpClient:post:" + path, {
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
                        DjpClient.logger.eError("DjpClient:post:" + path, { message: e_1.message });
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DjpClient.get = function (path, headers, params) {
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
                        endPoint = DjpClient.host + path + paramUri_2;
                        return [4 /*yield*/, axios_1.default.get(endPoint, { headers: headers, timeout: 10000 })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        lodash_1.unset(params, 'username');
                        lodash_1.unset(params, 'password');
                        DjpClient.logger.eInfo("DjpClient:get:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            paramsData: typeof params == 'object' ? params : { resultNotObject: lodash_1.toString(params) },
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_2 = _a.sent();
                        DjpClient.logger.eError("DjpClient:get:" + path, { message: e_2.message });
                        return [2 /*return*/, e_2.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DjpClient.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'content-type': 'application/json',
                            Authorization: 'Basic ' + Buffer.from(DjpClient.clientId + ':' + DjpClient.clientSecret).toString('base64'),
                        };
                        params = {
                            username: DjpClient.username,
                            password: DjpClient.password,
                            grant_type: 'password',
                        };
                        return [4 /*yield*/, DjpClient.post('/auth/oauth/token', headers, {}, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DjpClient.getNikFakeFromRedis = function (npwp) {
        return __awaiter(this, void 0, void 0, function () {
            var nikFake, testList, regexNpwp, findOnList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DjpClient.redis.getJson('test:dukcapil_list')];
                    case 1:
                        testList = (_a.sent()) || [];
                        regexNpwp = new RegExp([npwp.slice(0, 1), '.', npwp.slice(1)].join(''));
                        findOnList = lodash_1.findIndex(testList, function (index) { return regexNpwp.test(index); });
                        if (testList[findOnList]) {
                            nikFake = testList[findOnList];
                        }
                        if (DjpClient.byPassNpwp.test(npwp)) {
                            nikFake = "50000000000" + npwp.substring(10);
                        }
                        return [2 /*return*/, nikFake];
                }
            });
        });
    };
    DjpClient.validateNpwp = function (npwp) {
        return __awaiter(this, void 0, void 0, function () {
            var token, nikFake, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DjpClient.getToken()];
                    case 1:
                        token = _a.sent();
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        if (!(this.environment.toLowerCase() != 'production')) return [3 /*break*/, 3];
                        return [4 /*yield*/, DjpClient.getNikFakeFromRedis(npwp)];
                    case 2:
                        nikFake = _a.sent();
                        if (nikFake) {
                            return [2 /*return*/, {
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
                                }];
                        }
                        _a.label = 3;
                    case 3:
                        headers = {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + token.data.access_token,
                        };
                        return [4 /*yield*/, DjpClient.get("/api/getwpbynpwp/" + npwp, headers)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DjpClient.submitRegistrationNpwpPp = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var token, npwp, nikFake, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DjpClient.getToken()];
                    case 1:
                        token = _a.sent();
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        npwp = body.dataPengurus[0].npwpPj;
                        if (!(this.environment.toLowerCase() != 'production')) return [3 /*break*/, 3];
                        return [4 /*yield*/, DjpClient.getNikFakeFromRedis(npwp)];
                    case 2:
                        nikFake = _a.sent();
                        if (nikFake) {
                            return [2 /*return*/, {
                                    status: 200,
                                    data: {
                                        kdStatus: 1,
                                        ketStatus: 'Registration Succeed',
                                        message: {
                                            npwp: "915" + npwp.substring(10) + "8068000",
                                            kodeKpp: '068',
                                            namaKpp: 'PRATAMA JAKARTA JAGAKARSA',
                                        },
                                        createdDate: moment().locale('id').format('DD-MM-YYYY'),
                                    },
                                }];
                        }
                        _a.label = 3;
                    case 3:
                        headers = {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + token.data.access_token,
                        };
                        return [4 /*yield*/, DjpClient.post('/api/submitregptp', headers, body)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DjpClient.byPassNpwp = new RegExp('5000000000.....');
    DjpClient.environment = process.env.ENVIRONMENT || 'development';
    DjpClient.host = process.env.DJP_HOST || 'https://sim-apidjp.pajak.go.id';
    DjpClient.clientId = process.env.DJP_CLIENT_ID || 'APIX-DJP-180515-X001';
    DjpClient.clientSecret = process.env.DJP_CLIENT_SECRET || 'BR2JH-LA8PF-FQKV7-SIW5G';
    DjpClient.username = process.env.DJP_USERNAME || 'AHU-20180504001-U001';
    DjpClient.password = process.env.DJP_PASSWORD || 'TGHY-UJKL-87JK-RF54-GFYL';
    DjpClient.redis = new redis_connect_1.RedisConnect(10);
    DjpClient.logger = new logger_1.Logger();
    return DjpClient;
}());
exports.DjpClient = DjpClient;
//# sourceMappingURL=djp-client.js.map