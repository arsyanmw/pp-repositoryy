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
exports.District = void 0;
var Base_1 = require("./Base");
var typeorm_1 = require("typeorm");
var City_1 = require("./City");
var District = /** @class */ (function (_super) {
    __extends(District, _super);
    function District() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("increment"),
        __metadata("design:type", Number)
    ], District.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return City_1.City; }),
        typeorm_1.JoinColumn({
            name: "city_id",
            referencedColumnName: "id"
        }),
        __metadata("design:type", City_1.City)
    ], District.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({
            name: "code",
            type: "varchar",
            length: 255,
            nullable: false
        }),
        __metadata("design:type", String)
    ], District.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({
            name: "name",
            type: "varchar",
            length: 255,
            nullable: false
        }),
        __metadata("design:type", String)
    ], District.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            name: "latitude",
            type: "varchar",
            length: 255
        }),
        __metadata("design:type", String)
    ], District.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({
            name: "longitude",
            type: "varchar",
            length: 255
        }),
        __metadata("design:type", String)
    ], District.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column({
            name: "old_district_id",
            type: "int",
            nullable: false
        }),
        __metadata("design:type", Number)
    ], District.prototype, "oldDistrictId", void 0);
    District = __decorate([
        typeorm_1.Entity({ name: "district" })
    ], District);
    return District;
}(Base_1.Base));
exports.District = District;
//# sourceMappingURL=District.js.map