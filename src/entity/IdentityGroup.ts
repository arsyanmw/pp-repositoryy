import { Base } from './Base';
import { Identity } from './Identity';
import { Group } from './Group';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'identities_group' })
export class IdentityGroup extends Base {
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
}
