"use strict";
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
exports.TrackingDownloadCounter = void 0;
var TrackingDownloadSection_1 = require("./TrackingDownloadSection");
var PpMaster_1 = require("./PpMaster");
var typeorm_1 = require("typeorm");
var TrackingDownloadCounter = /** @class */ (function () {
    function TrackingDownloadCounter() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], TrackingDownloadCounter.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return TrackingDownloadSection_1.TrackingDownloadSection; }),
        typeorm_1.JoinColumn({
            name: 'tracking_download_section_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", TrackingDownloadSection_1.TrackingDownloadSection)
    ], TrackingDownloadCounter.prototype, "trackingDownloadSection", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return PpMaster_1.PpMaster; }),
        typeorm_1.JoinColumn({
            name: 'pp_master_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", PpMaster_1.PpMaster)
    ], TrackingDownloadCounter.prototype, "ppMaster", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'transaction_number',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TrackingDownloadCounter.prototype, "transactionNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'certificate_number',
            type: 'varchar',
            length: 255,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TrackingDownloadCounter.prototype, "certificateNumber", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'download_count',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TrackingDownloadCounter.prototype, "downloadCount", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'status',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TrackingDownloadCounter.prototype, "status", void 0);
    TrackingDownloadCounter = __decorate([
        typeorm_1.Entity({ name: 'tracking_download_counter' })
    ], TrackingDownloadCounter);
    return TrackingDownloadCounter;
}());
exports.TrackingDownloadCounter = TrackingDownloadCounter;
//# sourceMappingURL=TrackingDownloadCounter.js.map