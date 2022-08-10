import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableFinancePp1659941396750 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // migration for create table finance_pp from entity/Finance.ts
        await queryRunner.createTable(
            new Table({
                name: 'finance_pp',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'identities_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'pp_master_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'perseroan_name',
                        type: 'varchar',
                    },
                    {
                        name: 'perseroan_npwp',
                        type: 'bigint',
                    },
                    {
                        name: 'perseroan_sub_district_id',
                        type: 'int',
                    },
                    {
                        name: 'transaction_number',
                        type: 'varchar',
                    },
                    {
                        name: 'file_certificate',
                        type: 'text',
                    },
                    {
                        name: 'aktiva_kas',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'aktiva_perlengkapan',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'aktiva_lainnya',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'aktiva_total',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'modal_kewajiban',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'modal_hutang_dagang',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'modal_hutang_lainnya',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'modal_usaha',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'modal_total',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'pendapatan',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'pendapatan_jasa',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'pendapatan_lainnya',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'pendapatan_total',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'beban_operasional',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'beban_sewa',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'beban_lainnya',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'beban_total',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'laba_rugi',
                        type: 'bigint',
                        default: 0,
                    },
                    {
                        name: 'periode_bulan',
                        type: 'tinyint',
                        isNullable: true,
                    },
                    {
                        name: 'periode_tahun',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'statement_condition',
                        type: 'bigint',
                        isNullable: true,
                    },
                    {
                        name: 'status',
                        type: 'int',
                        default: 1,
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'created_by',
                        type: 'bigint',
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_by',
                        type: 'bigint',
                    },
                    {
                        name: 'deleted_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'deleted_by',
                        type: 'bigint',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // migration for drop table finance_pp from entity/Finance.ts
        await queryRunner.dropTable('finance_pp');
    }
}
