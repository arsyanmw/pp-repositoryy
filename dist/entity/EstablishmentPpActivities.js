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
exports.EstablishmentPpActivities = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var Kbli_1 = require("./Kbli");
var EstablishmentPpActivities = /** @class */ (function (_super) {
    __extends(EstablishmentPpActivities, _super);
    function EstablishmentPpActivities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], EstablishmentPpActivities.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'establishment_pp_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], EstablishmentPpActivities.prototype, "establishmentPpId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'kbli_id',
            type: 'bigint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], EstablishmentPpActivities.prototype, "kbliId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Kbli_1.Kbli; }),
        typeorm_1.JoinColumn({
            name: 'kbli_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", Kbli_1.Kbli)
    ], EstablishmentPpActivities.prototype, "Kbli", void 0);
    EstablishmentPpActivities = __decorate([
        typeorm_1.Entity({ name: 'establishment_pp_activities' })
    ], EstablishmentPpActivities);
    return EstablishmentPpActivities;
}(Base_1.Base));
exports.EstablishmentPpActivities = EstablishmentPpActivities;
//# sourceMappingURL=EstablishmentPpActivities.js.map