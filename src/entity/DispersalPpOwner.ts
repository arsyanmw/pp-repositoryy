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
}
