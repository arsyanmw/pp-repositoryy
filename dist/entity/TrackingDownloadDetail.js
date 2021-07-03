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
exports.TrackingDownloadDetail = void 0;
var TrackingDownloadSection_1 = require("./TrackingDownloadSection");
var PpMaster_1 = require("./PpMaster");
var typeorm_1 = require("typeorm");
var TrackingDownloadDetail = /** @class */ (function () {
    function TrackingDownloadDetail() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], TrackingDownloadDetail.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return TrackingDownloadSection_1.TrackingDownloadSection; }),
        typeorm_1.JoinColumn({
            name: 'tracking_download_section_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", TrackingDownloadSection_1.TrackingDownloadSection)
    ], TrackingDownloadDetail.prototype, "trackingDownloadSection", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return PpMaster_1.PpMaster; }),
        typeorm_1.JoinColumn({
            name: 'pp_master_id',
            referencedColumnName: 'id',
        }),
        __metadata("design:type", PpMaster_1.PpMaster)
    ], TrackingDownloadDetail.prototype, "ppMaster", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'transaction_number',
            type: 'varchar',
            length: 255,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TrackingDownloadDetail.prototype, "transactionNumber", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'certificate_number',
            type: 'varchar',
            length: 255,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TrackingDownloadDetail.prototype, "certificateNumber", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'download_by',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TrackingDownloadDetail.prototype, "downloadBy", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            name: 'status',
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TrackingDownloadDetail.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'download_at',
        }),
        __metadata("design:type", Date)
    ], TrackingDownloadDetail.prototype, "downloadAt", void 0);
    TrackingDownloadDetail = __decorate([
        typeorm_1.Entity({ name: 'tracking_download_detail' })
    ], TrackingDownloadDetail);
    return TrackingDownloadDetail;
}());
exports.TrackingDownloadDetail = TrackingDownloadDetail;
//# sourceMappingURL=TrackingDownloadDetail.js.map