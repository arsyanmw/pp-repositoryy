import { Base } from "./Base";
import { Menu } from "./Menu";
import { AccessMenu } from "./AccessMenu";

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinTable,
    JoinColumn
} from "typeorm";

@Entity({name: "action_menu"})
export class ActionMenu extends Base {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @ManyToOne(type => Menu)
    @JoinColumn({
        name: "menu_id",
        referencedColumnName: "id"
    })
    menu: Menu

    @Column({
        type: "varchar",
        name: "action_name",
        nullable: false,
        length: 255
    })
    actionName: string;

    @Column({
        type: "longtext",
        name: "description"
    })
    description: string;

    @Column({
        type: "varchar",
        name: "url",
        nullable: true,
        length: 255
    })
    url: string;

    @OneToMany(type => AccessMenu, accessMenu => accessMenu.actionMenu)
    @JoinTable({
      name: "id"
    })
    accessMenus: AccessMenu[];
}
