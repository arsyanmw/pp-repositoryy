import { Base } from './Base';
import { ActionMenu } from './ActionMenu';
export declare class Menu extends Base {
    id: number;
    level: number;
    name: string;
    displayName: string;
    orderValue: number;
    description: string;
    image_url: string;
    actionMenus: ActionMenu[];
}
