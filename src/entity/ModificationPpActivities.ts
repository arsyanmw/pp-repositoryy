import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Kbli } from './Kbli';

@Entity({ name: 'modification_pp_activities' })
export class ModificationPpActivities extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'modification_pp_id',
        type: 'bigint',
        nullable: false,
    })
    modificationtPpId: number;

    @Column({
        name: 'kbli_id',
        type: 'bigint',
        nullable: false,
    })
    kbliId: number;

    @ManyToOne((type) => Kbli)
    @JoinColumn({
        name: 'kbli_id',
        referencedColumnName: 'id',
    })
    Kbli: Kbli;
}
