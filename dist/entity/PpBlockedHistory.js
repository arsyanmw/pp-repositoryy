"use strict";
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
exports.PpBlockedHistory = void 0;
var typeorm_1 = require("typeorm");
var SubDistrict_1 = require("./SubDistrict");
var class_validator_1 = require("class-validator");
var PpBlockedHistory = /** @class */ (function () {
    function PpBlockedHistory() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'inserted_at',
        }),
        __metadata("design:type", Date)
    ], PpBlockedHistory.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'pp_master_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "ppMasterId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'pp_blocked_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "ppBlockedId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'vouchers_code',
            type: 'varchar',
            length: 255,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "vouchersCode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identities_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "identitiesId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'last_transaction_number',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "lastTransactionNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'last_certificate_number',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "lastCertificateNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'perseroan_name',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "perseroanName", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return SubDistrict_1.SubDistrict; }),
        typeorm_1.JoinColumn({
            name: 'sub_district_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", SubDistrict_1.SubDistrict)
    ], PpBlockedHistory.prototype, "subDistrict", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'sub_district_id',
            type: 'bigint',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "subDistrictId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'blocked_source',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "blockedSource", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'blocked_reasons',
            type: 'text',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "blockedReasons", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'requester_person',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], PpBlockedHistory.prototype, "requesterPerson", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'is_blocked',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "isBlocked", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'blocked_at',
        }),
        __metadata("design:type", Date)
    ], PpBlockedHistory.prototype, "blockedAt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'blocked_by',
            type: 'bigint',
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "blockedBy", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'updated_at',
        }),
        __metadata("design:type", Date)
    ], PpBlockedHistory.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'updated_by',
            type: 'bigint',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], PpBlockedHistory.prototype, "updatedBy", void 0);
    PpBlockedHistory = __decorate([
        typeorm_1.Entity({ name: 'pp_blocked_history' })
    ], PpBlockedHistory);
    return PpBlockedHistory;
}());
exports.PpBlockedHistory = PpBlockedHistory;
//# sourceMappingURL=PpBlockedHistory.js.map