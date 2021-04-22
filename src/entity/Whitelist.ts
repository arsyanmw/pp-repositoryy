import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity({name: "whitelist"})
export class Whitelist extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({
        name: "whitelist_name",
        type: "varchar",
        length: 255,
        nullable: false
    })
    whitelistName: string;

    @Column({
        name: "whitelist_type",
        type: "tinyint",
        nullable: false
    })
    whitelistType: number;
}
