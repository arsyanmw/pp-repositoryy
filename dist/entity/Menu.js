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
exports.Menu = void 0;
var Base_1 = require("./Base");
var ActionMenu_1 = require("./ActionMenu");
var typeorm_1 = require("typeorm");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Menu.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'level',
            nullable: false,
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Menu.prototype, "level", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'name',
            nullable: false,
            length: 255,
        }),
        __metadata("design:type", String)
    ], Menu.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'display_name',
            nullable: true,
            length: 255,
        }),
        __metadata("design:type", String)
    ], Menu.prototype, "displayName", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'order_value',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Menu.prototype, "orderValue", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'longtext',
            name: 'description',
        }),
        __metadata("design:type", String)
    ], Menu.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'image_url',
            nullable: true,
            length: 255,
        }),
        __metadata("design:type", String)
    ], Menu.prototype, "image_url", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'parent_id',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Menu.prototype, "parentId", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            name: 'url',
            nullable: true,
            length: 255,
        }),
        __metadata("design:type", String)
    ], Menu.prototype, "url", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ActionMenu_1.ActionMenu; }, function (actionMenu) { return actionMenu.menu; }),
        typeorm_1.JoinTable({
            name: 'id',
        }),
        __metadata("design:type", Array)
    ], Menu.prototype, "actionMenus", void 0);
    Menu = __decorate([
        typeorm_1.Entity({ name: 'menu' })
    ], Menu);
    return Menu;
}(Base_1.Base));
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map