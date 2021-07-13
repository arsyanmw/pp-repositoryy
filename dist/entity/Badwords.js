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
exports.Badwords = void 0;
var BaseUserLog_1 = require("./BaseUserLog");
var typeorm_1 = require("typeorm");
var Badwords = /** @class */ (function (_super) {
    __extends(Badwords, _super);
    function Badwords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Badwords.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'words',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Badwords.prototype, "words", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'badwords_type_id',
            type: 'tinyint',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Badwords.prototype, "badwordsTypeId", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'words_code',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Badwords.prototype, "wordsCode", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'reason',
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Badwords.prototype, "reason", void 0);
    Badwords = __decorate([
        typeorm_1.Entity({ name: 'badwords' })
    ], Badwords);
    return Badwords;
}(BaseUserLog_1.BaseUserLog));
exports.Badwords = Badwords;
//# sourceMappingURL=Badwords.js.map