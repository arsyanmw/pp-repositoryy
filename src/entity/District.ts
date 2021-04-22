import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, OneToMany, JoinColumn
} from "typeorm";
import {City} from "./City";

@Entity({name: "district"})
export class District extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @ManyToOne(type => City)
    @JoinColumn({
        name: "city_id",
        referencedColumnName: "id"
    })
    city: City

    @Column({
        name: "code",
        type: "varchar",
        length: 255,
        nullable: false
    })
    code: string;

    @Column({
        name: "name",
        type: "varchar",
        length: 255,
        nullable: false
    })
    name: string;

    @Column({
        name: "latitude",
        type: "varchar",
        length: 255
    })
    latitude: string;

    @Column({
        name: "longitude",
        type: "varchar",
        length: 255
    })
    longitude: string;

    @Column({
        name: "old_district_id",
        type: "int",
        nullable: false
    })
    oldDistrictId: number;
}
