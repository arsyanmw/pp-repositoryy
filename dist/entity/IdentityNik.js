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
exports.IdentityNik = void 0;
var BaseUserLog_1 = require("./BaseUserLog");
var Identity_1 = require("./Identity");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var IdentityNik = /** @class */ (function (_super) {
    __extends(IdentityNik, _super);
    function IdentityNik() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], IdentityNik.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Identity_1.Identity; }, function (identity) { return identity.identityNik; }),
        typeorm_1.JoinColumn({
            name: 'identities_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", Identity_1.Identity)
    ], IdentityNik.prototype, "identity", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'nik',
            type: 'varchar',
            unique: true,
            length: 255,
            nullable: false,
        }),
        class_validator_1.IsNumberString(),
        class_validator_1.Length(16, 16),
        __metadata("design:type", String)
    ], IdentityNik.prototype, "nik", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'is_verified',
            type: 'tinyint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], IdentityNik.prototype, "isVerified", void 0);
    IdentityNik = __decorate([
        typeorm_1.Entity({ name: 'identities_nik' })
    ], IdentityNik);
    return IdentityNik;
}(BaseUserLog_1.BaseUserLog));
exports.IdentityNik = IdentityNik;
//# sourceMappingURL=IdentityNik.js.map