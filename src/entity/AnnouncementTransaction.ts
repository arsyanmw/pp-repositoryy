import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'announcement_transaction' })
export class AnnouncementTransaction extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    ppMasterId: number;

    @Column({
        name: 'transaction_type_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    transactionTypeId: number;

    @Column({
        name: 'transaction_at',
    })
    transactionAt: Date;

    @Column({
        name: 'perseroan_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsNotEmpty()
    perseroanName: string;

    @Column({
        name: 'certificate_number',
        type: 'varchar',
        length: 255,
    })
    certificateNumber: string;

    @Column({
        name: 'perseroan_sub_district_id',
        type: 'bigint',
        nullable: false,
    })
    @IsNotEmpty()
    perseroanSubDistrictId: number;
}
