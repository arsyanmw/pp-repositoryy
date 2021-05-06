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
exports.SimpadhuClient = void 0;
var axios_1 = require("axios");
var FormData = require("form-data");
var SimpadhuClient = /** @class */ (function () {
    function SimpadhuClient() {
    }
    SimpadhuClient.post = function (path, form, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(SimpadhuClient.host + path, form, { headers: headers })];
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
    SimpadhuClient.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append('key', SimpadhuClient.key);
                        return [4 /*yield*/, SimpadhuClient.post('/auth/generateSign', form, form.getHeaders())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SimpadhuClient.validate = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, form, validationResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SimpadhuClient.getToken()];
                    case 1:
                        resp = _a.sent();
                        console.log('Response generateSign, HTTP Code: ', resp.status, ' Response Body: ', resp.data);
                        if (resp.data.status != 200) {
                            return [2 /*return*/, resp];
                        }
                        if (this.environment.toLowerCase() != 'production' && data.voucher == SimpadhuClient.byPassVoucher) {
                            return [2 /*return*/, {
                                    data: {
                                        status: 200,
                                        message: 'SUCCESS',
                                        value: 1,
                                    },
                                }];
                        }
                        form = new FormData();
                        form.append('no_voucher', data.voucher);
                        form.append('id_produk', data.idProduk || 40);
                        form.append('tipe_transaksi', data.tipeTransaksi || 60);
                        form.append('id_mapping', data.idMapping || 1);
                        return [4 /*yield*/, SimpadhuClient.post('/service/kodePembayaran?sign=' + resp.data.value, form, form.getHeaders())];
                    case 2:
                        validationResp = _a.sent();
                        console.log('Response validasi voucher, HTTP Code: ', validationResp.status, ' Response Body: ', validationResp.data);
                        return [2 /*return*/, validationResp];
                }
            });
        });
    };
    SimpadhuClient.redeem = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, form, redeemResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SimpadhuClient.getToken()];
                    case 1:
                        resp = _a.sent();
                        console.log('Response generateSign, HTTP Code: ', resp.status, ' Response Body: ', resp.data);
                        if (resp.data.status != 200) {
                            return [2 /*return*/, resp];
                        }
                        if (this.environment.toLowerCase() != 'production' && data.voucher == SimpadhuClient.byPassVoucher) {
                            return [2 /*return*/, {
                                    data: {
                                        status: 200,
                                        message: 'SUCCESS',
                                        value: 1,
                                    },
                                }];
                        }
                        form = new FormData();
                        form.append('kode_pembayaran', data.voucher);
                        form.append('nomor_transaksi', data.trxNumber);
                        form.append('id_produk', data.idProduk || 40);
                        form.append('tipe_transaksi', data.tipeTransaksi || 60);
                        form.append('id_mapping', data.idMapping || 1);
                        return [4 /*yield*/, SimpadhuClient.post('/service/updateTerpakaiMapping?sign=' + resp.data.value, form, form.getHeaders())];
                    case 2:
                        redeemResp = _a.sent();
                        console.log('Response redeem voucher, HTTP Code: ', redeemResp.status, ' Response Body: ', redeemResp.data);
                        return [2 /*return*/, redeemResp];
                }
            });
        });
    };
    // for bypassing voucher validation, testing purpose
    SimpadhuClient.byPassVoucher = '000000000001';
    SimpadhuClient.environment = process.env.ENVIRONMENT || 'development';
    SimpadhuClient.host = process.env.SIMPADHU_HOST || 'http://simpadhu.svc';
    SimpadhuClient.key = process.env.SIMPADHU_KEY || '14211c2b599e50e6f0b069beb8c0477c';
    return SimpadhuClient;
}());
exports.SimpadhuClient = SimpadhuClient;
//# sourceMappingURL=simpadhu-client.js.map