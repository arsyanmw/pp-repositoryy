import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'establishment_pp_benefit' })
export class EstablishmentPpBenefit extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'establishment_pp_id',
        type: 'bigint',
        nullable: false,
    })
    establishmentPpId: number;

    @Column({
        name: 'criteria_value',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    criteriaValue: string;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'benefit_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    benefitName: string;

    @Column({
        name: 'identity_type_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    identityTypeId: number;

    @Column({
        name: 'identity_value',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    identityValue: string;

    @Column({
        name: 'benefit_birthplace',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    benefitBirthplace: string;

    @Column({
        name: 'benefit_birthdate',
        type: 'date',
        nullable: false,
    })
    @IsNotEmpty()
    benefitBirthdate: Date;

    @Column({
        name: 'benefit_address',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    benefitAddress: string;

    @Column({
        name: 'benefit_nationality',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    benefitNationality: string;

    @Column({
        name: 'benefit_npwp',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    benefitNpwp: string;

    @Column({
        name: 'benefit_relation',
        type: 'text',
        nullable: false,
    })
    @IsNotEmpty()
    benefitRelation: string;
}
