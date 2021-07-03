import { TrackingDownloadSection } from './TrackingDownloadSection';
import { PpMaster } from './PpMaster';

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity({ name: 'tracking_download_count' })
export class TrackingDownloadCount {
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
        name: 'download_count',
        nullable: true,
    })
    downloadCount: number;

    @Column({
        type: 'int',
        name: 'status',
        nullable: true,
    })
    status: number;
}
