import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn
} from "typeorm";
import {District} from "./District";

@Entity({name: "sub_district"})
export class SubDistrict extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @ManyToOne(type => District)
    @JoinColumn({
        name: "district_id",
        referencedColumnName: "id"
    })
    district: District

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
        name: "old_sub_district_id",
        type: "int",
        nullable: false
    })
    oldSubDistrictId: number;
}
