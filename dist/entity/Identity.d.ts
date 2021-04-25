import { Base } from './Base';
import { IdentityNik } from './IdentityNik';
import { IdentityEmail } from './IdentityEmail';
import { IdentityGroup } from './IdentityGroup';
import { Position } from './Position';
export declare class Identity extends Base {
    id: number;
    fullName: string;
    passwordHash: string;
    phone: string;
    birthplace: string;
    birthdate: Date;
    address: string;
    addressRt: number;
    addressRw: number;
    subDistrictId: number;
    postalcode: number;
    positionId: number;
    job: string;
    nationality: string;
    npwp: string;
    npwpIsVerified: number;
    identityNik: IdentityNik;
    identityEmail: IdentityEmail;
    identityGroups: IdentityGroup[];
    position: Position;
}
