import { Base } from './Base';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'section' })
export class Section extends Base {
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
        type: 'varchar',
        name: 'display_name',
        length: 255,
    })
    displayName: string;

    @Column({
        type: 'int',
        name: 'order_value',
    })
    orderValue: number;
}
