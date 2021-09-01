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
exports.RedisConnect = void 0;
var bluebird_1 = require("bluebird");
// eslint-disable-next-line
var redis = require('redis');
bluebird_1.promisifyAll(redis.RedisClient.prototype);
bluebird_1.promisifyAll(redis.Multi.prototype);
var RedisConnect = /** @class */ (function () {
    function RedisConnect(db) {
        if (db === void 0) { db = 0; }
        this.client = redis.createClient({
            host: RedisConnect.redisHost,
            port: RedisConnect.redisPort,
            db: db,
        });
    }
    RedisConnect.prototype.set = function (key, value, option, valueOption) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (option && valueOption) {
                            result = this.client.setAsync(key, value, option, valueOption);
                        }
                        else if (option) {
                            result = this.client.setAsync(key, value, option);
                        }
                        else {
                            result = this.client.setAsync(key, value);
                        }
                        return [4 /*yield*/, result];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RedisConnect.prototype.setJson = function (key, value, option, valueOption) {
        return __awaiter(this, void 0, void 0, function () {
            var valueStringify, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueStringify = JSON.stringify(value);
                        return [4 /*yield*/, this.set(key, valueStringify, option, valueOption)];
                    case 1:
                        result = _a.sent();
                        if (option == 'GET') {
                            return [2 /*return*/, JSON.parse(result)];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RedisConnect.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getAsync(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RedisConnect.prototype.delete = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.del(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RedisConnect.prototype.getJson = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.client.getAsync(key)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    RedisConnect.prototype.getAll = function (key) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var data, allKeys, allKeys_1, allKeys_1_1, k, value, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = [];
                        return [4 /*yield*/, this.client.keysAsync(key)];
                    case 1:
                        allKeys = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, 9, 14]);
                        allKeys_1 = __asyncValues(allKeys);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, allKeys_1.next()];
                    case 4:
                        if (!(allKeys_1_1 = _b.sent(), !allKeys_1_1.done)) return [3 /*break*/, 7];
                        k = allKeys_1_1.value;
                        return [4 /*yield*/, this.client.getAsync(k)];
                    case 5:
                        value = _b.sent();
                        data.push({ key: k, value: value });
                        _b.label = 6;
                    case 6: return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(allKeys_1_1 && !allKeys_1_1.done && (_a = allKeys_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(allKeys_1)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, data];
                }
            });
        });
    };
    RedisConnect.prototype.getAllJson = function (key) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var data, allKeys, allKeys_2, allKeys_2_1, k, value, e_2_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = [];
                        return [4 /*yield*/, this.client.keysAsync(key)];
                    case 1:
                        allKeys = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, 9, 14]);
                        allKeys_2 = __asyncValues(allKeys);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, allKeys_2.next()];
                    case 4:
                        if (!(allKeys_2_1 = _b.sent(), !allKeys_2_1.done)) return [3 /*break*/, 7];
                        k = allKeys_2_1.value;
                        return [4 /*yield*/, this.getJson(k)];
                    case 5:
                        value = _b.sent();
                        data.push({ key: k, value: value });
                        _b.label = 6;
                    case 6: return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(allKeys_2_1 && !allKeys_2_1.done && (_a = allKeys_2.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(allKeys_2)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, data];
                }
            });
        });
    };
    RedisConnect.redisHost = process.env.REDIS_HOST || '127.0.0.1';
    RedisConnect.redisPort = process.env.REDIS_PORT || '6379';
    return RedisConnect;
}());
exports.RedisConnect = RedisConnect;
//# sourceMappingURL=redis-connect.js.map