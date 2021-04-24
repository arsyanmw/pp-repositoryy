import { Base } from './Base';
import { District } from './District';
export declare class SubDistrict extends Base {
    id: number;
    district: District;
    code: string;
    name: string;
    latitude: string;
    longitude: string;
    oldSubDistrictId: number;
}
