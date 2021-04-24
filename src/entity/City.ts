import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Province } from './Province';

@Entity({ name: 'city' })
export class City extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Province)
    @JoinColumn({
        name: 'province_id',
        referencedColumnName: 'id',
    })
    Province: Province;

    @Column({
        name: 'code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    code: string;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'latitude',
        type: 'varchar',
        length: 255,
    })
    latitude: string;

    @Column({
        name: 'longitude',
        type: 'varchar',
        length: 255,
    })
    longitude: string;

    @Column({
        name: 'old_city_id',
        type: 'int',
        nullable: false,
    })
    oldCityId: number;
}
