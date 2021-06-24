import { Base } from './Base';
import { Group } from './Group';
import { ActionMenu } from './ActionMenu';
export declare class AccessMenu extends Base {
    id: number;
    group: Group;
    actionMenu: ActionMenu;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}
