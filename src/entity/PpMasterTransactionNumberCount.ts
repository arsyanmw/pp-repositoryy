import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pp_master_transaction_number_count' })
export class PpMasterTransactionNumberCount extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    ppMasterId: number;

    @Column({
        name: 'transaction_number_count',
        type: 'bigint',
        nullable: false,
    })
    transactionNumberCount: number;
}
