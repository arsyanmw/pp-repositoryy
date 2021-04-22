import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity({name: "establishment_pp_owner"})
export class EstablishmentPpOwner extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({
        name: "establishment_pp_id",
        type: "bigint",
        nullable: false
    })
    establishmentPpId: number;

    @Column({
        name: "identities_id",
        type: "bigint",
        nullable: false
    })
    identitiesId: number;
}
