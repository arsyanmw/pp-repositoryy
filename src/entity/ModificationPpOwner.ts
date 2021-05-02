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
}
