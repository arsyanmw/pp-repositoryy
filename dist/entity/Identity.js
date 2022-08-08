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
exports.Identity = void 0;
var typeorm_1 = require("typeorm");
var BaseUserLog_1 = require("./BaseUserLog");
var IdentityNik_1 = require("./IdentityNik");
var IdentityEmail_1 = require("./IdentityEmail");
var IdentityGroup_1 = require("./IdentityGroup");
var class_validator_1 = require("class-validator");
var Position_1 = require("./Position");
var Finance_1 = require("./Finance");
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Identity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
            unique: false,
            name: 'full_name',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Identity.prototype, "fullName", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'password_hash',
            type: 'longtext',
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Identity.prototype, "passwordHash", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 255,
            name: 'phone',
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsPhoneNumber(),
        __metadata("design:type", String)
    ], Identity.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'birthplace',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Identity.prototype, "birthplace", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'birthdate',
            type: 'date',
        }),
        class_validator_1.IsDateString(),
        __metadata("design:type", Date)
    ], Identity.prototype, "birthdate", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'address',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Identity.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'address_rt',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "addressRt", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'address_rw',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "addressRw", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'sub_district_id',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "subDistrictId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'postalcode',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "postalcode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'position_id',
            type: 'int',
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "positionId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'job',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Identity.prototype, "job", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'nationality',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Identity.prototype, "nationality", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'npwp',
            type: 'varchar',
            length: 255,
            nullable: false,
            default: 'NP0000000001',
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsNumberString(),
        class_validator_1.Length(15, 15),
        __metadata("design:type", String)
    ], Identity.prototype, "npwp", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'nip',
            type: 'varchar',
            length: 255,
        }),
        class_validator_1.IsOptional(),
        class_validator_1.IsNumberString(),
        class_validator_1.Length(25, 25),
        __metadata("design:type", String)
    ], Identity.prototype, "nip", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'npwp_is_verified',
            type: 'int',
            nullable: false,
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "npwpIsVerified", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return IdentityNik_1.IdentityNik; }, function (identityNik) { return identityNik.identity; }),
        typeorm_1.JoinTable({
            name: 'id',
        }),
        __metadata("design:type", IdentityNik_1.IdentityNik)
    ], Identity.prototype, "identityNik", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return IdentityEmail_1.IdentityEmail; }, function (identityEmail) { return identityEmail.identity; }),
        typeorm_1.JoinTable({
            name: 'id',
        }),
        __metadata("design:type", IdentityEmail_1.IdentityEmail)
    ], Identity.prototype, "identityEmail", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return IdentityGroup_1.IdentityGroup; }, function (identityGroup) { return identityGroup.identity; }),
        typeorm_1.JoinTable({
            name: 'id',
        }),
        __metadata("design:type", Array)
    ], Identity.prototype, "identityGroups", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Position_1.Position; }),
        typeorm_1.JoinColumn({
            name: 'position_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", Position_1.Position)
    ], Identity.prototype, "position", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'created_by',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'updated_by',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'deleted_by',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Identity.prototype, "deletedBy", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return Finance_1.Finance; }, function (finance) { return finance.identitiesId; }),
        (0, typeorm_1.JoinColumn)({
            name: 'identities_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", Finance_1.Finance)
    ], Identity.prototype, "finance", void 0);
    Identity = __decorate([
        typeorm_1.Entity({ name: 'identities' })
    ], Identity);
    return Identity;
}(BaseUserLog_1.BaseUserLog));
exports.Identity = Identity;
//# sourceMappingURL=Identity.js.map