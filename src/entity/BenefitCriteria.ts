import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'benefit_criteria' })
export class BenefitCriteria extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'code',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    code: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    description: string;
}
