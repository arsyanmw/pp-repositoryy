import 'reflect-metadata';
import { ConnectionOptions, Connection } from 'typeorm';
/**
 * Alphabetic entity import
 */
import { AccessMenu } from './entity/AccessMenu';
import { ActionMenu } from './entity/ActionMenu';
import { Badwords } from './entity/Badwords';
import { Base } from './entity/Base';
import { Blacklist } from './entity/Blacklist';
import { BlacklistType } from './entity/BlacklistType';
import { City } from './entity/City';
import { Country } from './entity/Country';
import { District } from './entity/District';
import { EstablishmentPp } from './entity/EstablishmentPp';
import { EstablishmentPpActivities } from './entity/EstablishmentPpActivities';
import { EstablishmentPpBenefit } from './entity/EstablishmentPpBenefit';
import { EstablishmentPpHistory } from './entity/EstablishmentPpHistory';
import { EstablishmentPpOwner } from './entity/EstablishmentPpOwner';
import { Group } from './entity/Group';
import { Identity } from './entity/Identity';
import { IdentityEmail } from './entity/IdentityEmail';
import { IdentityGroup } from './entity/IdentityGroup';
import { IdentityNik } from './entity/IdentityNik';
import { Kbli } from './entity/Kbli';
import { Menu } from './entity/Menu';
import { NormalizationWords } from './entity/NormalizationWords';
import { Position } from './entity/Position';
import { PpMaster } from './entity/PpMaster';
import { Province } from './entity/Province';
import { SubDistrict } from './entity/SubDistrict';
import { TransactionType } from './entity/TransactionType';
import { Whitelist } from './entity/Whitelist';
/**
 * Another lib
 */
import { Jwt } from './lib/jwt';
export declare const connection: (config: ConnectionOptions) => Promise<Connection>;
export { Jwt, Connection, AccessMenu, ActionMenu, Badwords, Base, Blacklist, BlacklistType, City, Country, District, EstablishmentPp, EstablishmentPpActivities, EstablishmentPpBenefit, EstablishmentPpHistory, EstablishmentPpOwner, Group, Identity, IdentityEmail, IdentityGroup, IdentityNik, Kbli, Menu, NormalizationWords, Position, PpMaster, Province, SubDistrict, TransactionType, Whitelist, };
