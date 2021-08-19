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
exports.ElasticLibrary = void 0;
var elasticsearch_1 = require("@elastic/elasticsearch");
var lodash_1 = require("lodash");
var moment = require("moment");
var ElasticLibrary = /** @class */ (function () {
    function ElasticLibrary() {
        this.elasticSearchConnection = new elasticsearch_1.Client({
            node: ElasticLibrary.elasticsearchHost,
        });
    }
    ElasticLibrary.prototype.indexOrUpdate = function (indexInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.elasticSearchConnection.index(__assign({}, indexInput))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ElasticLibrary.prototype.getIndexPostfix = function (index) {
        return index.trim() + "_" + ElasticLibrary.environment.toLowerCase();
    };
    ElasticLibrary.prototype.searchProfilePp = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var elasticResponse, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.elasticSearchConnection.search({
                            index: this.getIndexPostfix('search_profile_pp'),
                            body: query,
                        })];
                    case 1:
                        elasticResponse = _a.sent();
                        results = elasticResponse.body.hits.hits.map(function (hit) {
                            var source = hit._source;
                            return {
                                perseroanName: source.perseroan_name,
                                perseroanPhone: source.perseroan_phone,
                                provinceName: source.province_name,
                                cityName: source.city_name,
                                districtName: source.district_name,
                                subDistrictName: source.sub_district_name,
                                ppMasterId: source.pp_master_id,
                                transactionQty: source.transaction_qty,
                                perseroanAddress: source.perseroan_address,
                                perseroanPostalcode: source.perseroan_postalcode,
                                lastStatus: source.last_status,
                                isBlocked: source.is_blocked,
                            };
                        });
                        return [2 /*return*/, {
                                totalCount: elasticResponse.body.hits.total.value,
                                data: results,
                            }];
                }
            });
        });
    };
    ElasticLibrary.prototype.indexOrUpdateProfilePp = function (profilePp) {
        return __awaiter(this, void 0, void 0, function () {
            var is_blocked, doc, oldSource, result, error_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        is_blocked = profilePp.isBlocked;
                        doc = lodash_1.pickBy({
                            pp_master_id: profilePp.ppMasterId,
                            perseroan_name: profilePp.perseroanName,
                            perseroan_phone: profilePp.perseroanPhone,
                            province_name: profilePp.provinceName,
                            city_name: profilePp.cityName,
                            district_name: profilePp.districtName,
                            sub_district_name: profilePp.subDistrictName,
                            transaction_qty: profilePp.transactionQty,
                            perseroan_address: profilePp.perseroanAddress,
                            perseroan_postalcode: profilePp.perseroanPostalcode,
                            last_status: profilePp.lastStatus,
                        }, lodash_1.identity);
                        if (lodash_1.isNumber(is_blocked))
                            doc.is_blocked = is_blocked;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.elasticSearchConnection.getSource({
                                index: this.getIndexPostfix('search_profile_pp'),
                                id: profilePp.ppMasterId,
                            })];
                    case 2:
                        oldSource = (_a.sent()).body;
                        return [4 /*yield*/, this.elasticSearchConnection.index({
                                index: this.getIndexPostfix('search_profile_pp'),
                                id: profilePp.ppMasterId,
                                body: __assign(__assign(__assign({}, oldSource), doc), { '@timestamp': moment().locale('id').toISOString() }),
                            })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.elasticSearchConnection.index({
                                index: this.getIndexPostfix('search_profile_pp'),
                                id: profilePp.ppMasterId,
                                body: __assign(__assign({}, doc), { '@timestamp': moment().locale('id').toISOString() }),
                            })];
                    case 5:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ElasticLibrary.environment = process.env.ENVIRONMENT || 'development';
    ElasticLibrary.elasticsearchHost = process.env.ELASTICSEARCH_APPS || 'http://127.0.0.1:9200';
    return ElasticLibrary;
}());
exports.ElasticLibrary = ElasticLibrary;
//# sourceMappingURL=elastic-search.js.map