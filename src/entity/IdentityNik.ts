import { BaseUserLog } from './BaseUserLog';
import { Identity } from './Identity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { Length, IsNumberString } from 'class-validator';

@Entity({ name: 'identities_nik' })
export class IdentityNik extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne((type) => Identity, (identity) => identity.identityNik)
    @JoinColumn({
        name: 'identities_id',
        referencedColumnName: 'id',
    })
    identity: Identity;

    @Column({
        name: 'nik',
        type: 'varchar',
        unique: true,
        length: 255,
        nullable: false,
    })
    @IsNumberString()
    @Length(16, 16)
    nik: string;

    @Column({
        name: 'is_verified',
        type: 'tinyint',
        nullable: false,
    })
    isVerified: number;
}
