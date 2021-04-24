import { Base } from './Base';
import { Identity } from './Identity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({ name: 'identities_email' })
export class IdentityEmail extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne((type) => Identity, (identity) => identity.identityEmail)
    @JoinColumn({
        name: 'identities_id',
        referencedColumnName: 'id',
    })
    identity: Identity;

    @Column({
        name: 'email',
        type: 'varchar',
        unique: true,
        length: 255,
        nullable: false,
    })
    @IsEmail()
    email: string;

    @Column({
        name: 'is_verified',
        type: 'tinyint',
        nullable: false,
    })
    isVerified: number;
}
