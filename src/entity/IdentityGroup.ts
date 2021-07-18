import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
import { Group } from './Group';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity({ name: 'identities_group' })
export class IdentityGroup extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Identity, (identity) => identity.identityGroups)
    @JoinColumn({
        name: 'identities_id',
        referencedColumnName: 'id',
    })
    identity: Identity;

    @ManyToOne((type) => Group, (group) => group.identityGroups)
    @JoinColumn({
        name: 'groups_id',
        referencedColumnName: 'id',
    })
    group: Group;

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
