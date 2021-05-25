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
exports.DispersalPp = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var DispersalPp = /** @class */ (function (_super) {
    __extends(DispersalPp, _super);
    function DispersalPp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'pp_type_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "ppTypeId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'transaction_type_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "transactionTypeId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'section_value_json',
            type: 'text',
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "sectionValueJson", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'vouchers_code',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "vouchersCode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identities_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "identitiesId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'transaction_number',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "transactionNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'certificate_number',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "certificateNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_name',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanName", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_alias',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanAlias", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_email',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsEmail(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanEmail", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_address',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanAddress", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_rt',
            type: 'int',
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanRt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_rw',
            type: 'int',
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "perseroanRw", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_sub_district_id',
            type: 'bigint',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanSubDistrictId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_postalcode',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanPostalcode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_phone',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanPhone", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_capital',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanCapital", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_npwp',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanNpwp", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_npwp_created_at',
            type: 'date',
        }),
        __metadata("design:type", Date)
    ], DispersalPp.prototype, "perseroanNpwpCreatedAt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_kpp_code',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanKppCode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_kpp_name',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "perseroanKppName", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'file_statement',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "fileStatement", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'file_certificate',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], DispersalPp.prototype, "fileCertificate", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'dispersal_reason_id',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], DispersalPp.prototype, "dispersalReasonId", void 0);
    DispersalPp = __decorate([
        typeorm_1.Entity({ name: 'dispersal_pp' })
    ], DispersalPp);
    return DispersalPp;
}(Base_1.Base));
exports.DispersalPp = DispersalPp;
//# sourceMappingURL=DispersalPp.js.map