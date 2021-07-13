"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.BeneficialOwnerClient = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var FormData = require("form-data");
var redis_connect_1 = require("./redis-connect");
var logger_1 = require("./logger");
var BeneficialOwnerClient = /** @class */ (function () {
    function BeneficialOwnerClient() {
    }
    BeneficialOwnerClient.post = function (path, headers, body, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_1, config, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_1 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_1 += paramUri_1 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        config = {
                            headers: headers,
                            timeout: 10000,
                        };
                        if (BeneficialOwnerClient.environment != 'production') {
                            config['auth'] = {
                                username: 'AHU2021',
                                password: 'ceban1',
                            };
                        }
                        return [4 /*yield*/, axios_1.default.post(BeneficialOwnerClient.host + path + paramUri_1, body, config)];
                    case 1:
                        result = _a.sent();
                        BeneficialOwnerClient.logger.eInfo("BeneficialOwnerClient:" + path, {
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        BeneficialOwnerClient.logger.eError("BeneficialOwnerClient:" + path, { message: e_1.message });
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BeneficialOwnerClient.get = function (path, headers, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paramUri_2, config, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paramUri_2 = '';
                        lodash_1.forOwn(params, function (value, key) {
                            paramUri_2 += paramUri_2 == '' ? "?" + key + "=" + value : "&" + key + "=" + value;
                        });
                        config = {
                            headers: headers,
                            timeout: 10000,
                        };
                        if (BeneficialOwnerClient.environment != 'production') {
                            config['auth'] = {
                                username: 'AHU2021',
                                password: 'ceban1',
                            };
                        }
                        return [4 /*yield*/, axios_1.default.get(BeneficialOwnerClient.host + path + paramUri_2, config)];
                    case 1:
                        result = _a.sent();
                        BeneficialOwnerClient.logger.eInfo('BeneficialOwnerClient', __assign(__assign({}, result.data), { status: result.status }));
                        return [2 /*return*/, result];
                    case 2:
                        e_2 = _a.sent();
                        BeneficialOwnerClient.logger.eError("BeneficialOwnerClient", { message: e_2.message });
                        return [2 /*return*/, e_2.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BeneficialOwnerClient.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form, key, cache, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append('client', BeneficialOwnerClient.client);
                        form.append('clientKey', BeneficialOwnerClient.clientKey);
                        key = 'BO:token';
                        return [4 /*yield*/, BeneficialOwnerClient.redis.getJson(key)];
                    case 1:
                        cache = _a.sent();
                        if (!cache) return [3 /*break*/, 2];
                        return [2 /*return*/, cache];
                    case 2: return [4 /*yield*/, BeneficialOwnerClient.post('/service/getToken', form.getHeaders(), form)];
                    case 3:
                        result = _a.sent();
                        if (result.status == 200 && result.data.status == 'success') {
                            BeneficialOwnerClient.redis.setJson(key, { data: result.data, status: result.status }, 'EX', 60 * 20);
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BeneficialOwnerClient.transaction = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var token, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BeneficialOwnerClient.getToken()];
                    case 1:
                        token = _a.sent();
                        if (token.status != 200) {
                            return [2 /*return*/, token];
                        }
                        headers = {
                            'content-type': 'application/json',
                            'auth-jwt': 'Bearer ' + token.data.data,
                        };
                        return [4 /*yield*/, BeneficialOwnerClient.post('/service/transaksi', headers, body)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BeneficialOwnerClient.environment = process.env.ENVIRONMENT || 'development';
    BeneficialOwnerClient.host = process.env.BENEFICIAL_OWNER_HOST || 'https://staging-bo.ahu.go.id';
    BeneficialOwnerClient.client = process.env.BENEFICIAL_OWNER_CLIENT_ID || 'tes-api-bo';
    BeneficialOwnerClient.clientKey = process.env.BENEFICIAL_OWNER_CLIENT_SECRET || '123456';
    BeneficialOwnerClient.redis = new redis_connect_1.RedisConnect(10);
    BeneficialOwnerClient.logger = new logger_1.Logger();
    return BeneficialOwnerClient;
}());
exports.BeneficialOwnerClient = BeneficialOwnerClient;
//# sourceMappingURL=beneficial-owner-client.js.map