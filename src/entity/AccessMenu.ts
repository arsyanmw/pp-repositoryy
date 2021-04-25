import { Base } from './Base';
import { Group } from './Group';
import { ActionMenu } from './ActionMenu';

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'access_menu' })
export class AccessMenu extends Base {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Group)
    @JoinColumn({
        name: 'groups_id',
        referencedColumnName: 'id',
    })
    group: Group;

    @ManyToOne((type) => ActionMenu)
    @JoinColumn({
        name: 'action_menu_id',
        referencedColumnName: 'id',
    })
    actionMenu: ActionMenu;
}
