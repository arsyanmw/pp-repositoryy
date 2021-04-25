import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Country } from './Country';

@Entity({ name: 'province' })
export class Province extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Country)
    @JoinColumn({
        name: 'country_id',
        referencedColumnName: 'id',
    })
    Country: Country;

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
        name: 'old_province_id',
        type: 'int',
        nullable: false,
    })
    oldProvinceId: number;
}
