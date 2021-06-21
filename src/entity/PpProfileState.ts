import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {IsEmail, IsNotEmpty} from 'class-validator';

@Entity({ name: 'pp_profile_state' })
export class PpProfileState extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'pp_profile_leads_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    ppProfileLeadsId: number;

    @Column({
        name: 'transaction_number',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    transactionNumber: string;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    ppMasterId: number;

    @Column({
        name: 'pp_data_json',
        type: 'text',
    })
    ppDataJson: string;
}
