import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'dispersal_pp_activities' })
export class DispersalPpActivities extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'dispersal_pp_id',
        type: 'bigint',
        nullable: false,
    })
    dispersalPpId: number;

    @Column({
        name: 'kbli_id',
        type: 'bigint',
        nullable: false,
    })
    kbliId: number;
}
