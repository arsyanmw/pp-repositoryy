import { Base } from './Base';
import { ActionMenu } from './ActionMenu';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';

@Entity({ name: 'menu' })
export class Menu extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'int',
        name: 'level',
        nullable: false,
        default: 0,
    })
    level: number;

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
        nullable: true,
        length: 255,
    })
    displayName: string;

    @Column({
        type: 'int',
        name: 'order_value',
        nullable: true,
    })
    orderValue: number;

    @Column({
        type: 'longtext',
        name: 'description',
    })
    description: string;

    @Column({
        type: 'varchar',
        name: 'image_url',
        nullable: true,
        length: 255,
    })
    image_url: string;

    @Column({
        type: 'int',
        name: 'parent_id',
        nullable: true,
    })
    parentId: number;

    @Column({
        type: 'varchar',
        name: 'url',
        nullable: true,
        length: 255,
    })
    url: string;

    @OneToMany((type) => ActionMenu, (actionMenu) => actionMenu.menu)
    @JoinTable({
        name: 'id',
    })
    actionMenus: ActionMenu[];
}
