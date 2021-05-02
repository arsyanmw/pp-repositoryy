import 'reflect-metadata';
import { createConnection, ConnectionOptions, Connection } from 'typeorm';

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
import { ModificationPp } from './entity/ModificationPp';
import { ModificationPpActivities } from './entity/ModificationPpActivities';
import { ModificationPpBenefit } from './entity/ModificationPpBenefit';
import { ModificationPpHistory } from './entity/ModificationPpHistory';
import { ModificationPpOwner } from './entity/ModificationPpOwner';
import { GlobalParam } from './entity/GlobalParam';
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
import { PpMasterTransactionState } from './entity/PpMasterTransactionState';
import { Province } from './entity/Province';
import { SubDistrict } from './entity/SubDistrict';
import { TransactionType } from './entity/TransactionType';
import { Whitelist } from './entity/Whitelist';

/**
 * Another lib
 */
import { Jwt } from './lib/jwt';

export const connection = async (config: ConnectionOptions) => {
    const connectionOptions: ConnectionOptions = {
        ...config,
        entities: [__dirname + '/entity/**/*'],
    };
    return await createConnection(connectionOptions);
};

export {
    Jwt,
    Connection,
    AccessMenu,
    ActionMenu,
    Badwords,
    Base,
    Blacklist,
    BlacklistType,
    City,
    Country,
    District,
    EstablishmentPp,
    EstablishmentPpActivities,
    EstablishmentPpBenefit,
    EstablishmentPpHistory,
    EstablishmentPpOwner,
    ModificationPp,
    ModificationPpActivities,
    ModificationPpBenefit,
    ModificationPpHistory,
    ModificationPpOwner,
    GlobalParam,
    Group,
    Identity,
    IdentityEmail,
    IdentityGroup,
    IdentityNik,
    Kbli,
    Menu,
    NormalizationWords,
    Position,
    PpMaster,
    PpMasterTransactionState,
    Province,
    SubDistrict,
    TransactionType,
    Whitelist,
};
