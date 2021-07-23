import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'dispersal_pp_owner' })
export class DispersalPpOwner extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'dispersal_pp_id',
        type: 'bigint',
        nullable: false,
    })
    dispersalPpId: number;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'prev_identities_id',
        type: 'bigint',
        nullable: false,
        default: 0,
    })
    prevIdentitiesId: number;

    @Column({
        name: 'next_identities_id',
        type: 'bigint',
        nullable: false,
        default: 0,
    })
    nextIdentitiesId: number;

    @Column({
        name: 'owner_value_json',
        type: 'text',
        nullable: true,
    })
    ownerValueJson: string;

    @Column({
        name: 'prev_owner_value_json',
        type: 'text',
        nullable: true,
    })
    prevOwnerValueJson: string;

    @Column({
        name: 'next_owner_value_json',
        type: 'text',
        nullable: true,
    })
    nextOwnerValueJson: string;
}
