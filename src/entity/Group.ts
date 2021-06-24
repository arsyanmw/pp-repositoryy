import { Base } from './Base';
import { IdentityGroup } from './IdentityGroup';
import { AccessMenu } from './AccessMenu';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';

@Entity({ name: 'groups' })
export class Group extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'int',
        name: 'parent_id',
        nullable: false,
        default: 0,
    })
    parentId: number;

    @Column({
        type: 'int',
        name: 'level',
        nullable: false,
        default: 0,
    })
    level: number;

    @Column({
        type: 'int',
        name: 'is_internal',
        nullable: false,
        default: 0,
    })
    isInternal: number;

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
        length: 255,
        unique: true,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'description',
        nullable: true,
        length: 255,
    })
    description: string;

    @Column({
        type: 'varchar',
        name: 'path',
        nullable: true,
        length: 255,
    })
    path: string;

    @Column({
        type: 'varchar',
        name: 'url',
        nullable: true,
        length: 255,
    })
    url: string;

    @OneToMany((type) => IdentityGroup, (identityGroup) => identityGroup.group)
    @JoinTable({
        name: 'id',
    })
    identityGroups: IdentityGroup[];

    @OneToMany((type) => AccessMenu, (accessMenu) => accessMenu.group)
    @JoinTable({
        name: 'id',
    })
    accessMenus: AccessMenu[];

    @Column({
        type: 'int',
        name: 'created_by',
        nullable: true,
    })
    createdBy: number;

    @Column({
        type: 'int',
        name: 'updated_by',
        nullable: true,
    })
    updatedBy: number;

    @Column({
        type: 'int',
        name: 'deleted_by',
        nullable: true,
    })
    deletedBy: number;
}
