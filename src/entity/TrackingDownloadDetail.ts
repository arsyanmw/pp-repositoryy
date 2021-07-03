import { TrackingDownloadSection } from './TrackingDownloadSection';
import { PpMaster } from './PpMaster';

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tracking_download_detail' })
export class TrackingDownloadDetail {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => TrackingDownloadSection)
    @JoinColumn({
        name: 'tracking_download_section_id',
        referencedColumnName: 'id',
    })
    trackingDownloadSection: TrackingDownloadSection;

    @ManyToOne((type) => PpMaster)
    @JoinColumn({
        name: 'pp_master_id',
        referencedColumnName: 'id',
    })
    ppMaster: PpMaster;

    @Column({
        name: 'transaction_number',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    transactionNumber: string;

    @Column({
        name: 'certificate_number',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    certificateNumber: string;

    @Column({
        type: 'int',
        name: 'download_by',
        nullable: true,
    })
    downloadBy: number;

    @Column({
        type: 'int',
        name: 'status',
        nullable: true,
    })
    status: number;

    @CreateDateColumn({
        name: 'download_at',
    })
    downloadAt: Date;
}
