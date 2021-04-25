import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'global_param' })
export class GlobalParam extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'value',
        type: 'text',
        nullable: false,
    })
    value: string;
}
