import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tracking_download_section' })
export class TrackingDownloadSection extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
        length: 255,
    })
    name: string;

    @Column({
        type: 'longtext',
        name: 'description',
    })
    description: string;
}
