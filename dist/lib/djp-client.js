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
/* eslint @typescript-eslint/no-var-requires: "off" */
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var moment = require('moment');
var DjpClient = /** @class */ (function () {
    function DjpClient() {
    }
    DjpClient.post = function (path, headers, body, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_1 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_1 += paramUri_1 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        return [4 /*yield*/, axios_1.default.post(DjpClient.host + path + paramUri_1, body, { headers: headers, timeout: 10000 })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        console.log(e_1.response);
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DjpClient.get = function (path, headers, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_2, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_2 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_2 += paramUri_2 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        return [4 /*yield*/, axios_1.default.get(DjpClient.host + path + paramUri_2, { headers: headers, timeout: 10000 })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2.message);
                        console.log(e_2.response);
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
    DjpClient.validateNpwp = function (npwp) {
        return __awaiter(this, void 0, void 0, function () {
            var token, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DjpClient.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log('Response getToken DJP, HTTP Code: ', token.status, ' Response Body: ', token.data);
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        if (this.environment.toLowerCase() != 'production' && DjpClient.byPassNpwp.test(npwp)) {
                            return [2 /*return*/, {
                                    status: 200,
                                    data: {
                                        kdStatus: 1,
                                        message: {
                                            npwp: '',
                                            status: '',
                                            nama: '',
                                            nik: "50000000000" + npwp.substring(10),
                                            kdJnsWp: '',
                                        },
                                    },
                                }];
                        }
                        headers = {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + token.data.access_token,
                        };
                        return [4 /*yield*/, DjpClient.get("/api/getwpbynpwp/" + npwp, headers)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DjpClient.submitRegistrationNpwpPp = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var token, npwp, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DjpClient.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log('Response getToken DJP, HTTP Code: ', token.status, ' Response Body: ', token.data);
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        npwp = body.dataPengurus[0].npwpPj;
                        if (this.environment.toLowerCase() != 'production' && DjpClient.byPassNpwp.test(npwp)) {
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
                        headers = {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + token.data.access_token,
                        };
                        return [4 /*yield*/, DjpClient.post('/api/submitregptp', headers, body)];
                    case 2: return [2 /*return*/, _a.sent()];
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
    return DjpClient;
}());
exports.DjpClient = DjpClient;
//# sourceMappingURL=djp-client.js.map