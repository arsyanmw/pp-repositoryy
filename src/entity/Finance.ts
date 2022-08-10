import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PpMaster } from './PpMaster';

@Entity({ name: 'finance_pp' })
export class Finance extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Identity, (Identity) => Identity.finance)
    @JoinColumn({
        name: 'identities_id',
        referencedColumnName: 'id',
    })
    identitiesId: Identity;

    @ManyToOne((type) => PpMaster)
    @JoinColumn({
        name: 'pp_master_id',
        referencedColumnName: 'id',
    })
    ppMasterId: PpMaster;

    @Column({
        type: 'varchar',
        name: 'perseroan_name',
    })
    @IsString()
    perseroanName: string;

    @Column({
        name: 'perseroan_npwp',
        type: 'bigint',
    })
    perseroanNpwp: number;

    @Column({
        name: 'perseroan_sub_district_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    perseroanSubDistrictId: number;

    @Column({
        type: 'varchar',
        name: 'transaction_number',
    })
    transactionNumber: string;

    @Column({
        type: 'text',
        name: 'file_certificate',
    })
    fileCertificate: string;

    @Column({
        type: 'bigint',
        name: 'aktiva_kas',
        default: 0,
    })
    @IsNumber()
    aktivaKas: number;

    @Column({
        type: 'bigint',
        name: 'aktiva_perlengkapan',
        default: 0,
    })
    @IsNumber()
    aktivaPerlengkapan: number;

    @Column({
        type: 'bigint',
        name: 'aktiva_lainnya',
        default: 0,
    })
    @IsNumber()
    aktivaLainnya: number;

    @Column({
        type: 'bigint',
        name: 'aktiva_total',
        default: 0,
    })
    @IsNumber()
    aktivaTotal: number;

    @Column({
        type: 'bigint',
        name: 'modal_kewajiban',
        default: 0,
    })
    @IsNumber()
    modalKewajiban: number;

    @Column({
        type: 'bigint',
        name: 'modal_hutang_dagang',
        default: 0,
    })
    @IsNumber()
    modalHutangDagang: number;

    @Column({
        type: 'bigint',
        name: 'modal_hutang_lainnya',
        default: 0,
    })
    @IsNumber()
    modalHutangLainnya: number;

    @Column({
        type: 'bigint',
        name: 'modal_usaha',
        default: 0,
    })
    @IsNumber()
    modalUsaha: number;

    @Column({
        type: 'bigint',
        name: 'modal_total',
        default: 0,
    })
    @IsNumber()
    modalTotal: number;

    @Column({
        type: 'bigint',
        name: 'pendapatan',
        default: 0,
    })
    @IsNumber()
    pendapatan: number;

    @Column({
        type: 'bigint',
        name: 'pendapatan_jasa',
        default: 0,
    })
    @IsNumber()
    pendapatanJasa: number;

    @Column({
        type: 'bigint',
        name: 'pendapatan_lainnya',
        default: 0,
    })
    @IsNumber()
    pendapatanLainnya: number;

    @Column({
        type: 'bigint',
        name: 'pendapatan_total',
        default: 0,
    })
    @IsNumber()
    pendapatanTotal: number;

    @Column({
        type: 'bigint',
        name: 'beban_operasional',
        default: 0,
    })
    @IsNumber()
    bebanOperasional: number;

    @Column({
        type: 'bigint',
        name: 'beban_sewa',
        default: 0,
    })
    @IsNumber()
    bebanSewa: number;

    @Column({
        type: 'bigint',
        name: 'beban_lainnya',
        default: 0,
    })
    @IsNumber()
    bebanLainnya: number;

    @Column({
        type: 'bigint',
        name: 'beban_total',
        default: 0,
    })
    @IsNumber()
    bebanTotal: number;

    @Column({
        type: 'bigint',
        name: 'laba_rugi',
        default: 0,
    })
    @IsNumber()
    labaRugi: number;

    @Column({
        type: 'tinyint',
        name: 'periode_bulan',
        nullable: true,
    })
    @IsNumber()
    periodeBulan: number;

    @Column({
        type: 'int',
        name: 'periode_tahun',
        nullable: true,
    })
    @IsNumber()
    periodeTahun: number;

    @Column({
        type: 'text',
        name: 'statement_condition',
        nullable: true,
    })
    statementCondition: string;
}
