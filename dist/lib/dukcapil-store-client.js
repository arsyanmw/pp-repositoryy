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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DukcapilStoreClient = void 0;
var axios_1 = require("axios");
var FormData = require("form-data");
var lodash_1 = require("lodash");
var logger_1 = require("./logger");
var perf_hooks_1 = require("perf_hooks");
var DukcapilStoreClient = /** @class */ (function () {
    function DukcapilStoreClient() {
    }
    DukcapilStoreClient.post = function (path, dataForm) {
        var dataForm_1, dataForm_1_1;
        var e_1, _a;
        if (dataForm === void 0) { dataForm = []; }
        return __awaiter(this, void 0, void 0, function () {
            var form, nik, iterator, e_1_1, start, endPoint, result, end, e_2, end, logData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        form = new FormData();
                        nik = '-';
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        dataForm_1 = __asyncValues(dataForm);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, dataForm_1.next()];
                    case 3:
                        if (!(dataForm_1_1 = _b.sent(), !dataForm_1_1.done)) return [3 /*break*/, 5];
                        iterator = dataForm_1_1.value;
                        form.append(iterator.key, iterator.value);
                        if (iterator.key == 'nik') {
                            nik = iterator.value;
                        }
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(dataForm_1_1 && !dataForm_1_1.done && (_a = dataForm_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(dataForm_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        start = perf_hooks_1.performance.now();
                        endPoint = DukcapilStoreClient.host + path;
                        _b.label = 13;
                    case 13:
                        _b.trys.push([13, 15, , 16]);
                        return [4 /*yield*/, axios_1.default.post(endPoint, form, {
                                headers: __assign({ Authorization: "Bearer " + DukcapilStoreClient.key }, form.getHeaders()),
                                timeout: DukcapilStoreClient.timeout,
                            })];
                    case 14:
                        result = _b.sent();
                        end = perf_hooks_1.performance.now();
                        DukcapilStoreClient.logger.eInfo("DukcapilStoreClient:post:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            nik: nik,
                            formDataDukcapilStoreClient: dataForm,
                            resultDataDukcapilStoreClient: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 15:
                        e_2 = _b.sent();
                        end = perf_hooks_1.performance.now();
                        logData = {
                            errorMessage: e_2.message,
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            nik: nik,
                            formDataDukcapilStoreClient: dataForm,
                        };
                        if (e_2.response) {
                            logData['status'] = e_2.response.status;
                            if (e_2.response.data) {
                                logData['resultData'] = { resultNotObject: lodash_1.toString(e_2.response.data) };
                            }
                        }
                        DukcapilStoreClient.logger.eError("DukcapilStoreClient:post:" + path, logData);
                        return [2 /*return*/, e_2.response];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    DukcapilStoreClient.store = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var validationResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DukcapilStoreClient.post('/databalikan/api/store', [
                            {
                                key: 'nik',
                                value: data.nik,
                            },
                            {
                                key: 'id_lembaga',
                                value: data.idLembaga || '010028',
                            },
                            {
                                key: 'nama_lembaga',
                                value: data.namaLembaga || 'DIREKTORAT JENDERAL ADMINISTRASI HUKUM UMUM, KEMENKUMHAM',
                            },
                            {
                                key: 'param',
                                value: JSON.stringify(data.param),
                            },
                        ])];
                    case 1:
                        validationResp = _a.sent();
                        return [2 /*return*/, validationResp];
                }
            });
        });
    };
    DukcapilStoreClient.host = process.env.DUKCAPIL_STORE_HOST || 'http://127.0.0.1';
    DukcapilStoreClient.key = process.env.DUKCAPIL_STORE_KEY || 'key';
    DukcapilStoreClient.timeout = 30 * 1000; // 30 detik
    DukcapilStoreClient.logger = new logger_1.Logger();
    return DukcapilStoreClient;
}());
exports.DukcapilStoreClient = DukcapilStoreClient;
//# sourceMappingURL=dukcapil-store-client.js.map