import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'correction_pp_activities' })
export class CorrectionPpActivities extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'correction_pp_id',
        type: 'bigint',
        nullable: false,
    })
    correctionPpId: number;

    @Column({
        name: 'kbli_id',
        type: 'bigint',
        nullable: false,
    })
    kbliId: number;
}
