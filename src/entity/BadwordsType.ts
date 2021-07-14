import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'badwords_type' })
export class BadwordsType extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 255,
    })
    description: string;
}
