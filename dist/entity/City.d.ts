import { Base } from "./Base";
import { Province } from "./Province";
export declare class City extends Base {
    id: number;
    Province: Province;
    code: string;
    name: string;
    latitude: string;
    longitude: string;
    oldCityId: number;
}
