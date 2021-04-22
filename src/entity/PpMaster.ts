import { Base } from "./Base";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn
} from "typeorm";
import {SubDistrict} from "./SubDistrict";
import {IsEmail, IsNotEmpty} from "class-validator";

@Entity({name: "pp_master"})
export class PpMaster extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({
        name: "pp_type_id",
        type: "bigint",
        nullable: false
    })
    ppTypeId: number;

    @Column({
        name: "transaction_type_id",
        type: "bigint",
        nullable: false
    })
    transactionTypeId: number;

    @Column({
        name: "identities_id",
        type: "bigint",
        nullable: false
    })
    identitiesId: number;

    @Column({
        name: "certificate_number",
        type: "varchar",
        length: 255
    })
    certificateNumber: string;

    @Column({
        name: "perseroan_name",
        type: "varchar",
        length: 255,
        nullable: false
    })
    @IsNotEmpty()
    perseroanName: string;

    @Column({
        name: "perseroan_alias",
        type: "varchar",
        length: 255,
        nullable: false
    })
    perseroanAlias: string;

    @Column({
        name: "perseroan_email",
        type: "varchar",
        length: 255,
        nullable: false
    })
    @IsEmail()
    @IsNotEmpty()
    perseroanEmail: string;

    @Column({
        name: "perseroan_address",
        type: "varchar",
        length: 255,
        nullable: false
    })
    @IsNotEmpty()
    perseroanAddress: string;

    @Column({
        name: "perseroan_rt",
        type: "int"
    })
    perseroanRt: string;

    @Column({
        name: "perseroan_rw",
        type: "int"
    })
    perseroanRw: string;

    @ManyToOne(type => SubDistrict)
    @JoinColumn({
        name: "perseroan_sub_district_id",
        referencedColumnName: "id"
    })
    SubDistrict: SubDistrict

    @Column({
        name: "perseroan_sub_district_id",
        type: "bigint",
        nullable: false
    })
    @IsNotEmpty()
    perseroanSubDistrictId: number;

    @Column({
        name: "perseroan_postalcode",
        type: "bigint",
        nullable: false
    })
    @IsNotEmpty()
    perseroanPostalcode: number;

    @Column({
        name: "perseroan_phone",
        type: "varchar",
        length: 255
    })
    perseroanPhone: number;

    @Column({
        name: "perseroan_capital",
        type: "bigint"
    })
    perseroanCapital: number;

    @Column({
        name: "kbli_value_json",
        type: "text"
    })
    kbliValueJson: string;

    @Column({
        name: "owner_value_json",
        type: "text"
    })
    ownerValueJson: string;

    @Column({
        name: "benefit_value_json",
        type: "text"
    })
    benefitValueJson: string;
}
