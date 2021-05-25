import { Base } from './Base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'dispersal_reason' })
export class DispersalReason extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'reason_order',
        type: 'int',
        nullable: false,
    })
    reasonOrder: number;

    @Column({
        name: 'reason_description',
        type: 'text',
        nullable: false,
    })
    reasonDescription: string;
}
