import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'transaction_type' })
export class TransactionType extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'display_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    displayName: string;
}
