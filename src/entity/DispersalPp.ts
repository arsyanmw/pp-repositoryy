import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity({ name: 'dispersal_pp' })
export class DispersalPp extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

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
        name: 'vouchers_code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    vouchersCode: string;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'transaction_number',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    transactionNumber: string;

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
    })
    perseroanPostalcode: number;

    @Column({
        name: 'perseroan_phone',
        type: 'varchar',
        length: 255,
    })
    perseroanPhone: string;

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
    perseroanNpwpCreatedAt: Date;

    @Column({
        name: 'perseroan_kpp_code',
        type: 'bigint',
    })
    perseroanKppCode: number;

    @Column({
        name: 'perseroan_kpp_name',
        type: 'varchar',
        length: 255,
    })
    perseroanKppName: number;

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
}
