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
exports.EstablishmentPpOwner = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var EstablishmentPpOwner = /** @class */ (function (_super) {
    __extends(EstablishmentPpOwner, _super);
    function EstablishmentPpOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], EstablishmentPpOwner.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'establishment_pp_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], EstablishmentPpOwner.prototype, "establishmentPpId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'identities_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], EstablishmentPpOwner.prototype, "identitiesId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'owner_value_json',
            type: 'text',
        }),
        __metadata("design:type", String)
    ], EstablishmentPpOwner.prototype, "ownerValueJson", void 0);
    EstablishmentPpOwner = __decorate([
        typeorm_1.Entity({ name: 'establishment_pp_owner' })
    ], EstablishmentPpOwner);
    return EstablishmentPpOwner;
}(Base_1.Base));
exports.EstablishmentPpOwner = EstablishmentPpOwner;
//# sourceMappingURL=EstablishmentPpOwner.js.map