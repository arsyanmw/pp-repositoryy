import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'modification_pp_owner' })
export class ModificationPpOwner extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'modification_pp_id',
        type: 'bigint',
        nullable: false,
    })
    modificationtPpId: number;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'next_identities_id',
        type: 'bigint',
        nullable: false,
    })
    nextIdentitiesId: number;

    @Column({
        name: 'prev_identities_id',
        type: 'bigint',
        nullable: false,
    })
    prevIdentitiesId: number;

    @Column({
        name: 'owner_value_json',
        type: 'text',
    })
    ownerValueJson: string;

    @Column({
        name: 'next_owner_value_json',
        type: 'text',
    })
    nextOwnerValueJson: string;

    @Column({
        name: 'prev_owner_value_json',
        type: 'text',
    })
    prevOwnerValueJson: string;
}
