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
exports.ModificationPpBenefit = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var ModificationPpBenefit = /** @class */ (function (_super) {
    __extends(ModificationPpBenefit, _super);
    function ModificationPpBenefit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], ModificationPpBenefit.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'modification_pp_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], ModificationPpBenefit.prototype, "modificationtPpId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'criteria_value',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "criteriaValue", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identities_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], ModificationPpBenefit.prototype, "identitiesId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_name',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitName", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identity_type_id',
            type: 'bigint',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], ModificationPpBenefit.prototype, "identityTypeId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identity_value',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "identityValue", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_birthplace',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitBirthplace", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_birthdate',
            type: 'date',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Date)
    ], ModificationPpBenefit.prototype, "benefitBirthdate", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_address',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitAddress", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_nationality',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitNationality", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_npwp',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitNpwp", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'benefit_relation',
            type: 'text',
            nullable: false,
        }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], ModificationPpBenefit.prototype, "benefitRelation", void 0);
    ModificationPpBenefit = __decorate([
        typeorm_1.Entity({ name: 'modification_pp_benefit' })
    ], ModificationPpBenefit);
    return ModificationPpBenefit;
}(Base_1.Base));
exports.ModificationPpBenefit = ModificationPpBenefit;
//# sourceMappingURL=ModificationPpBenefit.js.map