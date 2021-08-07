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
exports.KswpClient = exports.enumPpPermissionCode = void 0;
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var logger_1 = require("./logger");
var perf_hooks_1 = require("perf_hooks");
var enumPpPermissionCode;
(function (enumPpPermissionCode) {
    enumPpPermissionCode["PP01"] = "PP01";
    enumPpPermissionCode["PP02"] = "PP02";
    enumPpPermissionCode["PP03"] = "PP03";
})(enumPpPermissionCode = exports.enumPpPermissionCode || (exports.enumPpPermissionCode = {}));
var KswpClient = /** @class */ (function () {
    function KswpClient() {
    }
    KswpClient.post = function (path, headers, body, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_1, start, result, end, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_1 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_1 += paramUri_1 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        start = perf_hooks_1.performance.now();
                        return [4 /*yield*/, axios_1.default.post(KswpClient.host + path + paramUri_1, body, {
                                headers: headers,
                                timeout: 10000,
                            })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        KswpClient.logger.eInfo("KswpClient:post:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            bodyData: typeof body == 'object' ? body : { resultNotObject: lodash_1.toString(body) },
                            paramsData: typeof params == 'object' ? params : { resultNotObject: lodash_1.toString(params) },
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        KswpClient.logger.eError("KswpClient:post:" + path, { message: e_1.message });
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KswpClient.get = function (path, headers, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_2, start, result, end, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_2 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_2 += paramUri_2 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        start = perf_hooks_1.performance.now();
                        return [4 /*yield*/, axios_1.default.get(KswpClient.host + path + paramUri_2, { headers: headers, timeout: 10000 })];
                    case 1:
                        result = _a.sent();
                        end = perf_hooks_1.performance.now();
                        KswpClient.logger.eInfo("KswpClient:get:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            paramsData: typeof params == 'object' ? params : { resultNotObject: lodash_1.toString(params) },
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_2 = _a.sent();
                        KswpClient.logger.eError("KswpClient:get:" + path, { message: e_2.message });
                        return [2 /*return*/, e_2.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KswpClient.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'content-type': 'application/json',
                        };
                        params = {
                            user: KswpClient.username,
                            pwd: KswpClient.password,
                        };
                        return [4 /*yield*/, KswpClient.post('/djp/token', headers, {}, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KswpClient.validateNpwpPp = function (npwp, ppPermissionCode, perseroanName) {
        if (perseroanName === void 0) { perseroanName = null; }
        return __awaiter(this, void 0, void 0, function () {
            var token, generateNpwp, generatePpName, headers, body, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, KswpClient.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log('Response getToken KSWP, HTTP Code: ', token.status, ' Response Body: ', token.data);
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        if (this.environment.toLowerCase() != 'production' && KswpClient.byPassNpwp.test(npwp)) {
                            generateNpwp = npwp.substring(10);
                            generatePpName = generateNpwp.split('');
                            generatePpName.forEach(function (value, index, array) {
                                array[index] = String.fromCharCode(65 + parseInt(value));
                            });
                            return [2 /*return*/, {
                                    status: 200,
                                    data: {
                                        status: 200,
                                        message: {
                                            status: 'VALID',
                                            NPWP: "915" + generateNpwp + "8068000",
                                            nama: perseroanName,
                                        },
                                    },
                                }];
                        }
                        headers = {
                            'content-type': 'application/json',
                            Authorization: token.data.message,
                        };
                        body = {
                            npwp: npwp,
                            kdizin: ppPermissionCode,
                        };
                        return [4 /*yield*/, KswpClient.post("/djp/kswp", headers, body)];
                    case 2:
                        response = _a.sent();
                        console.log('Response Validate Npwp KSWP, HTTP Code: ', response.status, ' Response Body: ', response.data);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    KswpClient.byPassNpwp = new RegExp('915.....8068000');
    KswpClient.environment = process.env.ENVIRONMENT || 'development';
    KswpClient.host = process.env.KSWP_HOST || 'https://ws.pajak.go.id';
    KswpClient.username = process.env.KSWP_USERNAME || 'ditjenahu';
    KswpClient.password = process.env.KSWP_PASSWORD || 'YY28iPB9h';
    KswpClient.logger = new logger_1.Logger();
    return KswpClient;
}());
exports.KswpClient = KswpClient;
//# sourceMappingURL=kswp-client.js.map