import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'kbli' })
export class Kbli extends Base {
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
        name: 'category',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    category: string;

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
