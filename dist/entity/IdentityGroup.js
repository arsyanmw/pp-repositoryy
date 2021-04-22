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
exports.IdentityGroup = void 0;
var Base_1 = require("./Base");
var Identity_1 = require("./Identity");
var Group_1 = require("./Group");
var typeorm_1 = require("typeorm");
var IdentityGroup = /** @class */ (function (_super) {
    __extends(IdentityGroup, _super);
    function IdentityGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("increment"),
        __metadata("design:type", Number)
    ], IdentityGroup.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Identity_1.Identity; }, function (identity) { return identity.identityGroups; }),
        typeorm_1.JoinColumn({
            name: "identities_id",
            referencedColumnName: "id"
        }),
        __metadata("design:type", Identity_1.Identity)
    ], IdentityGroup.prototype, "identity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Group_1.Group; }, function (group) { return group.identityGroups; }),
        typeorm_1.JoinColumn({
            name: "groups_id",
            referencedColumnName: "id"
        }),
        __metadata("design:type", Group_1.Group)
    ], IdentityGroup.prototype, "group", void 0);
    IdentityGroup = __decorate([
        typeorm_1.Entity({ name: "identities_group" })
    ], IdentityGroup);
    return IdentityGroup;
}(Base_1.Base));
exports.IdentityGroup = IdentityGroup;
//# sourceMappingURL=IdentityGroup.js.map