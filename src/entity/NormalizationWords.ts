import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'normalization_words' })
export class NormalizationWords extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'right_words',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    rightWords: string;

    @Column({
        name: 'left_words',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    leftWords: string;
}
