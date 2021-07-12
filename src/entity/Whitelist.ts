import { BaseUserLog } from './BaseUserLog';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'whitelist' })
export class Whitelist extends BaseUserLog {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'whitelist_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    whitelistName: string;

    @Column({
        name: 'whitelist_type',
        type: 'tinyint',
        nullable: false,
    })
    whitelistType: number;

    @Column({
        name: 'whitelist_description',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    whitelistDescription: string;
}
