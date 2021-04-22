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
exports.ActionMenu = void 0;
var Base_1 = require("./Base");
var Menu_1 = require("./Menu");
var AccessMenu_1 = require("./AccessMenu");
var typeorm_1 = require("typeorm");
var ActionMenu = /** @class */ (function (_super) {
    __extends(ActionMenu, _super);
    function ActionMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("increment"),
        __metadata("design:type", Number)
    ], ActionMenu.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Menu_1.Menu; }),
        typeorm_1.JoinColumn({
            name: "menu_id",
            referencedColumnName: "id"
        }),
        __metadata("design:type", Menu_1.Menu)
    ], ActionMenu.prototype, "menu", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            name: "action_name",
            nullable: false,
            length: 255
        }),
        __metadata("design:type", String)
    ], ActionMenu.prototype, "actionName", void 0);
    __decorate([
        typeorm_1.Column({
            type: "longtext",
            name: "description"
        }),
        __metadata("design:type", String)
    ], ActionMenu.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            name: "url",
            nullable: true,
            length: 255
        }),
        __metadata("design:type", String)
    ], ActionMenu.prototype, "url", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return AccessMenu_1.AccessMenu; }, function (accessMenu) { return accessMenu.actionMenu; }),
        typeorm_1.JoinTable({
            name: "id"
        }),
        __metadata("design:type", Array)
    ], ActionMenu.prototype, "accessMenus", void 0);
    ActionMenu = __decorate([
        typeorm_1.Entity({ name: "action_menu" })
    ], ActionMenu);
    return ActionMenu;
}(Base_1.Base));
exports.ActionMenu = ActionMenu;
//# sourceMappingURL=ActionMenu.js.map