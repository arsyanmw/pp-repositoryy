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
exports.createTableFinancePpHistory1659947015547 = void 0;
var typeorm_1 = require("typeorm");
var createTableFinancePpHistory1659947015547 = /** @class */ (function () {
    function createTableFinancePpHistory1659947015547() {
    }
    createTableFinancePpHistory1659947015547.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // migration for create table finance_pp_history from entity/FinancePpHistory.ts
                    return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: 'finance_pp_history',
                            columns: [
                                {
                                    name: 'id',
                                    type: 'bigint',
                                    isPrimary: true,
                                    isGenerated: true,
                                    generationStrategy: 'increment',
                                },
                                {
                                    name: 'identities_id',
                                    type: 'bigint',
                                    isNullable: false,
                                },
                                {
                                    name: 'pp_master_id',
                                    type: 'bigint',
                                    isNullable: false,
                                },
                                {
                                    name: 'pp_finance_id',
                                    type: 'bigint',
                                    isNullable: false,
                                },
                                {
                                    name: 'perseroan_name',
                                    type: 'varchar',
                                },
                                {
                                    name: 'perseroan_npwp',
                                    type: 'bigint',
                                },
                                {
                                    name: 'perseroan_sub_district_id',
                                    type: 'int',
                                },
                                {
                                    name: 'transaction_number',
                                    type: 'varchar',
                                },
                                {
                                    name: 'file_certificate',
                                    type: 'text',
                                },
                                {
                                    name: 'aktiva_kas',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'aktiva_perlengkapan',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'aktiva_lainnya',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'aktiva_total',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'modal_kewajiban',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'modal_hutang_dagang',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'modal_hutang_lainnya',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'modal_usaha',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'modal_total',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'pendapatan',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'pendapatan_jasa',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'pendapatan_lainnya',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'pendapatan_total',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'beban_operasional',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'beban_sewa',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'beban_lainnya',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'beban_total',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'laba_rugi',
                                    type: 'bigint',
                                    default: 0,
                                },
                                {
                                    name: 'periode_bulan',
                                    type: 'tinyint',
                                    isNullable: true,
                                },
                                {
                                    name: 'periode_tahun',
                                    type: 'int',
                                    isNullable: true,
                                },
                                {
                                    name: 'statement_condition',
                                    type: 'bigint',
                                    isNullable: true,
                                },
                                {
                                    name: 'status',
                                    type: 'int',
                                    default: 1,
                                },
                                {
                                    name: 'created_at',
                                    type: 'datetime',
                                    default: 'CURRENT_TIMESTAMP',
                                },
                                {
                                    name: 'created_by',
                                    type: 'bigint',
                                },
                                {
                                    name: 'updated_at',
                                    type: 'datetime',
                                    default: 'CURRENT_TIMESTAMP',
                                },
                                {
                                    name: 'updated_by',
                                    type: 'bigint',
                                },
                                {
                                    name: 'deleted_at',
                                    type: 'datetime',
                                    default: 'CURRENT_TIMESTAMP',
                                },
                                {
                                    name: 'deleted_by',
                                    type: 'bigint',
                                },
                            ],
                        }))];
                    case 1:
                        // migration for create table finance_pp_history from entity/FinancePpHistory.ts
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createTableFinancePpHistory1659947015547.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // migration for drop table finance_pp from entity/Finance.ts
                    return [4 /*yield*/, queryRunner.dropTable('finance_pp_history')];
                    case 1:
                        // migration for drop table finance_pp from entity/Finance.ts
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createTableFinancePpHistory1659947015547;
}());
exports.createTableFinancePpHistory1659947015547 = createTableFinancePpHistory1659947015547;
//# sourceMappingURL=1659947015547-createTableFinancePpHistory.js.map