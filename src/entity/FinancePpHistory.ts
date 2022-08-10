import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseUserLog } from './BaseUserLog';
import { IsNumber, IsNumberString, IsString } from 'class-validator';

@Entity({ name: 'finance_pp_history' })
export class FinancePpHistory extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'identities_id',
        type: 'bigint',
        nullable: false,
    })
    identitiesId: number;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    ppMasterId: number;

    @Column({
        name: 'pp_finance_id',
        type: 'bigint',
        nullable: false,
    })
    ppFinanceId: number;

    @Column({
        type: 'varchar',
        name: 'perseroan_name',
    })
    @IsString()
    perseroanName: string;

    @Column({
        type: 'varchar',
        name: 'transaction_number',
    })
    @IsNumberString()
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
