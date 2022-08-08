"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancePpHistory = void 0;
var typeorm_1 = require("typeorm");
var BaseUserLog_1 = require("./BaseUserLog");
var class_validator_1 = require("class-validator");
var FinancePpHistory = /** @class */ (function (_super) {
    __extends(FinancePpHistory, _super);
    function FinancePpHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'identities_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "identitiesId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'pp_master_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "ppMasterId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            name: 'perseroan_name',
        }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], FinancePpHistory.prototype, "perseroanName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            name: 'transaction_number',
        }),
        (0, class_validator_1.IsNumberString)(),
        __metadata("design:type", String)
    ], FinancePpHistory.prototype, "transactionNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'text',
            name: 'file_certificate',
        }),
        __metadata("design:type", String)
    ], FinancePpHistory.prototype, "fileCertificate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'aktiva_kas',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "aktivaKas", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'aktiva_perlengkapan',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "aktivaPerlengkapan", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'aktiva_lainnya',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "aktivaLainnya", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'aktiva_total',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "aktivaTotal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'modal_kewajiban',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "modalKewajiban", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'modal_hutang_dagang',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "modalHutangDagang", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'modal_hutang_lainnya',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "modalHutangLainnya", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'modal_usaha',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "modalUsaha", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'modal_total',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "modalTotal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'pendapatan',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "pendapatan", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'pendapatan_jasa',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "pendapatanJasa", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'pendapatan_lainnya',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "pendapatanLainnya", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'pendapatan_total',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "pendapatanTotal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'beban_operasional',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "bebanOperasional", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'beban_sewa',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "bebanSewa", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'beban_lainnya',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "bebanLainnya", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'beban_total',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "bebanTotal", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'bigint',
            name: 'laba_rugi',
            default: 0,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "labaRugi", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'tinyint',
            name: 'periode_bulan',
            nullable: true,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "periodeBulan", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'int',
            name: 'periode_tahun',
            nullable: true,
        }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], FinancePpHistory.prototype, "periodeTahun", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'text',
            name: 'statement_condition',
            nullable: true,
        }),
        __metadata("design:type", String)
    ], FinancePpHistory.prototype, "statementCondition", void 0);
    FinancePpHistory = __decorate([
        (0, typeorm_1.Entity)({ name: 'finance_pp_history' })
    ], FinancePpHistory);
    return FinancePpHistory;
}(BaseUserLog_1.BaseUserLog));
exports.FinancePpHistory = FinancePpHistory;
//# sourceMappingURL=FinancePpHistory.js.map