import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'announcement_news' })
export class AnnouncementNews extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'title',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    title: string;

    @Column({
        name: 'description',
        type: 'text',
    })
    description: string;

    @Column({
        name: 'image_value_json',
        type: 'text',
    })
    imageValueJson: string;

    @Column({
        name: 'started_at',
    })
    startedAt: Date;

    @Column({
        name: 'expired_at',
    })
    expiredAt: Date;
}
