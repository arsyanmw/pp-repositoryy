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
exports.DataType = exports.AuditTrail = void 0;
var elastic_search_1 = require("./elastic-search");
var lodash_1 = require("lodash");
var moment = require("moment");
var DataType;
(function (DataType) {
    DataType["information"] = "Information";
    DataType["queryDatabase"] = "Query Database";
    DataType["insertDatabase"] = "Insert Database";
    DataType["updateDatabase"] = "Update Database";
    DataType["deleteDatabase"] = "Delete Database";
})(DataType || (DataType = {}));
exports.DataType = DataType;
var AuditTrail = /** @class */ (function () {
    function AuditTrail() {
        this.elasticLibrary = new elastic_search_1.ElasticLibrary();
    }
    AuditTrail.prototype.getIndex = function (source) {
        return "audittrail-" + source + "-" + AuditTrail.ENVIRONMENT.toLowerCase() + "-" + moment()
            .locale('id')
            .format('YYYY.MM.DD');
    };
    AuditTrail.prototype.getIndexLogEmail = function () {
        return "logs-email-" + AuditTrail.ENVIRONMENT.toLowerCase() + "-" + moment().locale('id').format('YYYY.MM.DD');
    };
    AuditTrail.prototype.commit = function (auditTrail) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceName, isCreated, data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceName = auditTrail.source || AuditTrail.SERVICE_NAME;
                        return [4 /*yield*/, this.checkIndex(this.getIndex(sourceName))];
                    case 1:
                        isCreated = _a.sent();
                        data = lodash_1.cloneDeepWith(auditTrail.data, function (value) {
                            if (lodash_1.isInteger(value)) {
                                return value.toString();
                            }
                        });
                        delete auditTrail.data;
                        return [4 /*yield*/, this.elasticLibrary.indexOrUpdate({
                                index: this.getIndex(sourceName),
                                body: __assign(__assign({ '@timestamp': moment().locale('id').toISOString(), source: AuditTrail.SERVICE_NAME }, auditTrail), { data: data }),
                            })];
                    case 2:
                        response = _a.sent();
                        if (!!isCreated) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.elasticLibrary.indicesPutSettings({
                                index: this.getIndex(sourceName),
                                flat_settings: true,
                                body: {
                                    'index.mapping.total_fields.limit': '3000',
                                },
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    AuditTrail.prototype.checkIndex = function (indexName) {
        return __awaiter(this, void 0, void 0, function () {
            var isCreated, indexList, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.elasticLibrary.indicesGet({
                                index: indexName,
                            })];
                    case 1:
                        indexList = _a.sent();
                        if (indexList) {
                            isCreated = true;
                        }
                        else {
                            isCreated = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        isCreated = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, isCreated];
                }
            });
        });
    };
    AuditTrail.prototype.email = function (logEmail) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.elasticLibrary.indexOrUpdate({
                            index: this.getIndexLogEmail(),
                            body: __assign({ '@timestamp': moment().locale('id').toISOString(), source: AuditTrail.SERVICE_NAME }, logEmail),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuditTrail.ENVIRONMENT = process.env.ENVIRONMENT || 'development';
    AuditTrail.SERVICE_NAME = process.env.SERVICE_NAME || 'service-local';
    return AuditTrail;
}());
exports.AuditTrail = AuditTrail;
//# sourceMappingURL=audittrail.js.map