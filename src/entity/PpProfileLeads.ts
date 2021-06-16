import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({ name: 'pp_profile_leads' })
export class PpProfileLeads extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'transaction_number',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    transactionNumber: string;

    @Column({
        name: 'pp_master_id',
        type: 'bigint',
        nullable: false,
    })
    ppMasterId: number;

    @Column({
        name: 'vouchers_code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    vouchersCode: string;

    @Column({
        name: 'profile_nik',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    profileNik: string;

    @Column({
        name: 'profile_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    profileName: string;

    @Column({
        name: 'profile_email',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @IsEmail()
    profileEmail: string;

    @Column({
        name: 'profile_birthdate',
        type: 'date',
        nullable: false,
    })
    profileBirthdate: Date;

    @Column({
        name: 'profile_address',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    profileAddress: string;

    @Column({
        name: 'profile_rt',
        type: 'int',
    })
    profileRt: number;

    @Column({
        name: 'profile_rw',
        type: 'int',
    })
    profileRw: number;

    @Column({
        name: 'profile_sub_district_id',
        type: 'bigint',
        nullable: false,
    })
    profileSubDistrictId: number;

    @Column({
        name: 'profile_postalcode',
        type: 'bigint',
    })
    profilePostalcode: number;

    @Column({
        name: 'profile_phone',
        type: 'varchar',
        length: 255,
    })
    profilePhone: string;

    @Column({
        name: 'profile_reason',
        type: 'varchar',
        length: 255,
    })
    profileReason: string;

    @Column({
        name: 'profile_download_count',
        type: 'int',
    })
    profileDownloadCount: number;

    @Column({
        name: 'profile_download_at',
        type: 'date',
    })
    profileDownloadAt: Date;
}
