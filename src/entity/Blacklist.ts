import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BlacklistType } from './BlacklistType';

@Entity({ name: 'blacklist' })
export class Blacklist extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'blacklist_name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    blacklistName: string;

    @ManyToOne((type) => BlacklistType)
    @JoinColumn({
        name: 'blacklist_type_id',
        referencedColumnName: 'id',
    })
    BlacklistType: BlacklistType;

    @Column({
        name: 'reason',
        type: 'varchar',
        length: 255,
    })
    reason: string;
}
