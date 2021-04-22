import {Entity, PrimaryGeneratedColumn, JoinTable, OneToOne, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Base } from "./Base";
import { IdentityNik } from "./IdentityNik";
import { IdentityEmail } from "./IdentityEmail";
import { IdentityGroup } from "./IdentityGroup";
import { IsNotEmpty, Length, IsPhoneNumber, IsOptional, IsDateString, IsNumberString } from "class-validator";
import {City} from "./City";
import {Position} from "./Position";

@Entity({name: "identities"})
export class Identity extends Base {
  @PrimaryGeneratedColumn("increment")
  id:number;

  @Column({
    type: "text",
    unique: false,
    name: "full_name",
    nullable: false
  })
  @IsNotEmpty()
  fullName: string;
  
  @Column({
    name: "password_hash",
    type: "longtext"
  })
  @IsNotEmpty()
  passwordHash: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "phone",
  })
  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @Column({
    name: "birthplace",
    type: "varchar",
    length: 255,
  })
  birthplace: string;

  @Column({
    name: "birthdate",
    type: "date"
  })
  @IsDateString()
  birthdate: Date;

  @Column({
    name: "address",
    type: "varchar",
    length: 255
  })
  address: string;
  
  @Column({
    name: "address_rt",
    type: "int"
  })
  addressRt: number;
  
  @Column({
    name: "address_rw",
    type: "int"
  })
  addressRw: number;
  
  @Column({
    name: "sub_district_id",
    type: "int"
  })
  subDistrictId: number;

  @Column({
    name: "postalcode",
    type: "int"
  })
  postalcode: number;

  @Column({
    name: "position_id",
    type: "int"
  })
  positionId: number;

  @Column({
    name: "job",
    type: "varchar",
    length: 255,
  })
  job: string;

  @Column({
    name: "nationality",
    type: "varchar",
    length: 255,
  })
  nationality: string;

  @Column({
    name: "npwp",
    type: "varchar",
    length: 255,
    nullable: false,
    default: "NP0000000001"
  })
  @IsOptional()
  @IsNumberString()
  @Length(15,15)
  npwp: string;

  @Column({
    name: "npwp_is_verified",
    type: "int",
    nullable: false,
    default: 0
  })
  npwpIsVerified: number;

  @OneToOne(type => IdentityNik, identityNik => identityNik.identity)
  @JoinTable({
    name: "id"
  })
  identityNik: IdentityNik;

  @OneToOne(type => IdentityEmail, identityEmail => identityEmail.identity)
  @JoinTable({
    name: "id"
  })
  identityEmail: IdentityEmail;

  @OneToMany(type => IdentityGroup, identityGroup => identityGroup.identity)
  @JoinTable({
    name: "id"
  })
  identityGroups: IdentityGroup[];

  @ManyToOne(type => Position)
  @JoinColumn({
    name: "position_id",
    referencedColumnName: "id"
  })
  position: Position
}
