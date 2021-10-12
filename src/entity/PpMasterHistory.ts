import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubDistrict } from './SubDistrict';
import { IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

@Entity({ name: 'pp_master_history' })
export class PpMasterHistory extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'inserted_at',
        nullable: false,
    })
    insertedAt: Date;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    ppMasterId: number;

    @Column({
        name: 'pp_type_id',
        type: 'bigint',
        nullable: false,
    })
    ppTypeId: number;

    @Column({
        name: 'transaction_type_id',
        type: 'bigint',
        nullable: false,
    })
    transactionTypeId: number;

    @Column({
        name: 'section_value_json',
        type: 'text',
    })
    sectionValueJson: string;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'next_identities_id',
        type: 'bigint',
        nullable: false,
        default: '0',
    })
    nextIdentitiesId: number;

    @Column({
        name: 'prev_identities_id',
        type: 'bigint',
        nullable: false,
        default: '0',
    })
    prevIdentitiesId: number;

    @Column({
        name: 'next_owner_value_json',
        type: 'text',
    })
    nextOwnerValueJson: string;

    @Column({
        name: 'prev_owner_value_json',
        type: 'text',
    })
    prevOwnerValueJson: string;

    @Column({
        name: 'certificate_number',
        type: 'varchar',
        length: 255,
    })
    certificateNumber: string;

    @Column({
        name: 'perseroan_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    perseroanName: string;

    @Column({
        name: 'perseroan_alias',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    perseroanAlias: string;

    @Column({
        name: 'perseroan_email',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsEmail()
    @IsNotEmpty()
    perseroanEmail: string;

    @Column({
        name: 'perseroan_address',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    perseroanAddress: string;

    @Column({
        name: 'perseroan_rt',
        type: 'int',
    })
    perseroanRt: string;

    @Column({
        name: 'perseroan_rw',
        type: 'int',
    })
    perseroanRw: string;

    @ManyToOne((type) => SubDistrict)
    @JoinColumn({
        name: 'perseroan_sub_district_id',
        referencedColumnName: 'id',
    })
    SubDistrict: SubDistrict;

    @Column({
        name: 'perseroan_sub_district_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    perseroanSubDistrictId: number;

    @Column({
        name: 'perseroan_postalcode',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    perseroanPostalcode: number;

    @Column({
        name: 'perseroan_phone',
        type: 'varchar',
        length: 255,
    })
    perseroanPhone: number;

    @Column({
        name: 'perseroan_capital',
        type: 'bigint',
    })
    perseroanCapital: number;

    @Column({
        name: 'perseroan_npwp',
        type: 'bigint',
    })
    perseroanNpwp: number;

    @Column({
        name: 'perseroan_npwp_created_at',
        type: 'date',
    })
    @IsDateString()
    perseroanNpwpCreatedAt: Date;

    @Column({
        name: 'perseroan_kpp_code',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    perseroanKppCode: string;

    @Column({
        name: 'perseroan_kpp_name',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    perseroanKppName: string;

    @Column({
        name: 'file_statement',
        type: 'varchar',
        length: 255,
    })
    fileStatement: string;

    @Column({
        name: 'file_certificate',
        type: 'varchar',
        length: 255,
    })
    fileCertificate: string;

    @Column({
        name: 'kbli_value_json',
        type: 'text',
    })
    kbliValueJson: string;

    @Column({
        name: 'owner_value_json',
        type: 'text',
    })
    ownerValueJson: string;

    @Column({
        name: 'benefit_value_json',
        type: 'text',
    })
    benefitValueJson: string;

    @Column({
        name: 'dispersal_reason_id',
        type: 'bigint',
    })
    dispersalReasonId: number;

    @Column({
        name: 'statement_name_similarity',
        type: 'text',
        nullable: true,
    })
    statementNameSimilarity: string;

    @Column({
        name: 'statement_beneficial_owner',
        type: 'text',
        nullable: true,
    })
    statementBeneficialOwner: string;

    @Column({
        name: 'statement_condition',
        type: 'text',
        nullable: true,
    })
    statementCondition: string;

    @Column({
        name: 'is_blocked',
        type: 'bigint',
        nullable: true,
    })
    isBlocked: number;

    @Column({
        name: 'blocked_at',
        nullable: true,
    })
    blockedAt: Date;

    @Column({
        name: 'is_approved',
        type: 'bigint',
        nullable: false,
    })
    isApproved: number;

    @Column({
        name: 'approved_at',
        nullable: false,
    })
    approvedAt: Date;

    @Column({
        name: 'transaction_number',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    transactionNumber: string;
}
