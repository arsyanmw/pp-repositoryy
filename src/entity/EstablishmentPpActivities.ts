import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn
} from "typeorm";
import {Kbli} from "./Kbli";

@Entity({name: "establishment_pp_activities"})
export class EstablishmentPpActivities extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({
        name: "establishment_pp_id",
        type: "bigint",
        nullable: false
    })
    establishmentPpId: number;

    @Column({
        name: "kbli_id",
        type: "bigint",
        nullable: false
    })
    kbliId: number;

    @ManyToOne(type => Kbli)
    @JoinColumn({
        name: "kbli_id",
        referencedColumnName: "id"
    })
    Kbli: Kbli
}
