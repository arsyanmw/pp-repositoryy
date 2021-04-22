import { Base } from "./Base";
import { City } from "./City";
export declare class District extends Base {
    id: number;
    city: City;
    code: string;
    name: string;
    latitude: string;
    longitude: string;
    oldDistrictId: number;
}
