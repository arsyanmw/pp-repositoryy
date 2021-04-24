import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'badwords' })
export class Badwords extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'words',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    words: string;

    @Column({
        name: 'badwords_type_id',
        type: 'tinyint',
        nullable: false,
    })
    badwordsTypeId: number;

    @Column({
        name: 'words_code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    wordsCode: string;

    @Column({
        name: 'reason',
        type: 'varchar',
        length: 255,
    })
    reason: string;
}
