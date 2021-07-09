import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'kbli' })
export class Kbli extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    code: string;

    @Column({
        name: 'kbli_category_id',
        type: 'bigint',
        nullable: false,
    })
    kbliCategoryId: number;

    @Column({
        name: 'old_category',
        type: 'varchar',
        length: 3,
        nullable: false,
    })
    oldCategory: string;

    @Column({
        name: 'title',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    title: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 255,
    })
    description: string;
}
