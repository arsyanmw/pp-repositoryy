import { Base } from "./Base";
import { Menu } from "./Menu";
import { AccessMenu } from "./AccessMenu";
export declare class ActionMenu extends Base {
    id: number;
    menu: Menu;
    actionName: string;
    description: string;
    url: string;
    accessMenus: AccessMenu[];
}
