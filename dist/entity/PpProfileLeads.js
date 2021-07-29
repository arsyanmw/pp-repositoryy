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
exports.PpProfileLeads = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var PpProfileLeads = /** @class */ (function (_super) {
    __extends(PpProfileLeads, _super);
    function PpProfileLeads() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'transaction_number',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "transactionNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'pp_master_id',
            type: 'bigint',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "ppMasterId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'download_section',
            type: 'int',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "downloadSection", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'vouchers_code',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "vouchersCode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_nik',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profileNik", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_name',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profileName", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_email',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profileEmail", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_birthdate',
            type: 'date',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Date)
    ], PpProfileLeads.prototype, "profileBirthdate", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_address',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profileAddress", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_rt',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "profileRt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_rw',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "profileRw", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_sub_district_id',
            type: 'bigint',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "profileSubDistrictId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_postalcode',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "profilePostalcode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_phone',
            type: 'varchar',
            length: 255,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profilePhone", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_reason',
            type: 'varchar',
            length: 255,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpProfileLeads.prototype, "profileReason", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_download_count',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "profileDownloadCount", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'profile_download_at',
            type: 'date',
        }),
        __metadata("design:type", Date)
    ], PpProfileLeads.prototype, "profileDownloadAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'updated_by',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], PpProfileLeads.prototype, "updatedBy", void 0);
    PpProfileLeads = __decorate([
        typeorm_1.Entity({ name: 'pp_profile_leads' })
    ], PpProfileLeads);
    return PpProfileLeads;
}(Base_1.Base));
exports.PpProfileLeads = PpProfileLeads;
//# sourceMappingURL=PpProfileLeads.js.map