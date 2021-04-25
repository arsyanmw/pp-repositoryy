import { Base } from './Base';
import { Country } from './Country';
export declare class Province extends Base {
    id: number;
    Country: Country;
    code: string;
    name: string;
    latitude: string;
    longitude: string;
    oldProvinceId: number;
}
