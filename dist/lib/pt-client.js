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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PtClient = void 0;
var axios_1 = require("axios");
var FormData = require("form-data");
var lodash_1 = require("lodash");
var logger_1 = require("./logger");
var perf_hooks_1 = require("perf_hooks");
var PtClient = /** @class */ (function () {
    function PtClient() {
    }
    PtClient.post = function (path, dataForm, headers) {
        var dataForm_1, dataForm_1_1;
        var e_1, _a;
        if (dataForm === void 0) { dataForm = []; }
        return __awaiter(this, void 0, void 0, function () {
            var form, iterator, e_1_1, start, endPoint, result, end, e_2, end;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        form = new FormData();
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
                        endPoint = PtClient.host + path;
                        _b.label = 13;
                    case 13:
                        _b.trys.push([13, 15, , 16]);
                        return [4 /*yield*/, axios_1.default.post(endPoint, form, {
                                headers: headers(form),
                                timeout: PtClient.timeout,
                            })];
                    case 14:
                        result = _b.sent();
                        end = perf_hooks_1.performance.now();
                        PtClient.logger.eInfo("PtClient:post:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            formData: dataForm,
                            resultData: typeof result.data == 'object' ? result.data : { resultNotObject: lodash_1.toString(result.data) },
                            status: result.status,
                        });
                        return [2 /*return*/, result];
                    case 15:
                        e_2 = _b.sent();
                        end = perf_hooks_1.performance.now();
                        PtClient.logger.eError("PtClient:post:" + path, {
                            timeExecution: (end - start).toFixed(2) + " milliseconds.",
                            endPoint: endPoint,
                            formData: dataForm,
                            code: e_2.code,
                            message: e_2.message,
                        });
                        return [2 /*return*/, {
                                status: e_2.code == 'ECONNABORTED' ? 501 : 500,
                                code: e_2.code,
                                data: {
                                    message: e_2.message,
                                    response: e_2.response,
                                },
                            }];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    PtClient.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PtClient.post('/service/getToken', [
                            { key: 'client', value: PtClient.client },
                            { key: 'clientKey', value: PtClient.clientKey },
                        ], function (form) { return form.getHeaders(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PtClient.validate = function (name, alias) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PtClient.getToken()];
                    case 1:
                        resp = _a.sent();
                        if (resp.status != 200) {
                            return [2 /*return*/, resp];
                        }
                        return [4 /*yield*/, PtClient.post('/service/getPesanNamaPerseroan', [
                                { key: 'nama', value: name },
                                { key: 'nama_singkat', value: alias },
                            ], function (form) { return ({
                                'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
                                AuthJWT: 'Bearer ' + resp.data.data.token,
                            }); })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PtClient.host = process.env.PT_HOST || 'https://AHU2021:ceban1@staging-ahuonline.ahu.go.id';
    PtClient.client = process.env.PT_CLIENT || 'hdti';
    PtClient.clientKey = process.env.PT_CLIENT_KEY || '4hu@hd2021';
    PtClient.timeout = 60 * 1000; // 60 detik
    PtClient.logger = new logger_1.Logger();
    return PtClient;
}());
exports.PtClient = PtClient;
//# sourceMappingURL=pt-client.js.map