import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableFinancePpTransactionNumber1660107021774 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // migration for create table finance_pp_transaction_number_count from entity/FinancePpTransactionNumberCount.ts
        await queryRunner.createTable(
            new Table({
                name: 'finance_pp_transaction_number_count',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'finance_pp_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'pp_master_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'transaction_number_count',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'int',
                    },
                    {
                        name: 'delete_at',
                        type: 'datetime',
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // migration for drop table finance_pp_transaction_number_count from entity/FinancePpTransactionNumberCount.ts
        await queryRunner.dropTable('finance_pp_transaction_number_count');
    }
}
