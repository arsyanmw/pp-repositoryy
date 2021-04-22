import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn
} from "typeorm";

@Entity({name: "country"})
export class Country extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

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
}
