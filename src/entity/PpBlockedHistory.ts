import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { SubDistrict } from './SubDistrict';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'pp_blocked_history' })
export class PpBlockedHistory {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({
        name: 'inserted_at',
    })
    insertedAt: Date;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    ppMasterId: number;

    @Column({
        name: 'pp_blocked_id',
        type: 'bigint',
        nullable: false,
    })
    ppBlockedId: number;

    @Column({
        name: 'vouchers_code',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    vouchersCode: string;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'last_transaction_number',
        type: 'varchar',
        length: 255,
    })
    lastTransactionNumber: string;

    @Column({
        name: 'last_certificate_number',
        type: 'varchar',
        length: 255,
    })
    lastCertificateNumber: string;

    @Column({
        name: 'perseroan_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    perseroanName: string;

    @ManyToOne((type) => SubDistrict)
    @JoinColumn({
        name: 'sub_district_id',
        referencedColumnName: 'id',
    })
    subDistrict: SubDistrict;

    @Column({
        name: 'sub_district_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    subDistrictId: number;

    @Column({
        name: 'blocked_source',
        type: 'bigint',
        nullable: false,
    })
    blockedSource: number;

    @Column({
        name: 'blocked_reasons',
        type: 'text',
        nullable: false,
    })
    @IsNotEmpty()
    blockedReasons: string;

    @Column({
        name: 'requester_person',
        type: 'varchar',
        length: 255,
    })
    requesterPerson: string;

    @Column({
        name: 'is_blocked',
        type: 'bigint',
        nullable: false,
    })
    isBlocked: number;

    @CreateDateColumn({
        name: 'blocked_at',
    })
    blockedAt: Date;

    @Column({
        name: 'blocked_by',
        type: 'bigint',
    })
    blockedBy: number;

    @Column({
        name: 'updated_at',
    })
    updatedAt: Date;

    @Column({
        name: 'updated_by',
        type: 'bigint',
        nullable: true,
    })
    updatedBy: number;
}
