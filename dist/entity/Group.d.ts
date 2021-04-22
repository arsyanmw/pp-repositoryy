import { Base } from "./Base";
import { IdentityGroup } from "./IdentityGroup";
import { AccessMenu } from "./AccessMenu";
export declare class Group extends Base {
    id: number;
    parentId: number;
    level: number;
    name: string;
    description: string;
    path: string;
    url: string;
    identityGroups: IdentityGroup[];
    accessMenus: AccessMenu[];
}
