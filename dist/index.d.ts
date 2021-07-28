import 'reflect-metadata';
import { ConnectionOptions, Connection } from 'typeorm';
/**
 * Alphabetic entity import
 */
import { AccessMenu } from './entity/AccessMenu';
import { ActionMenu } from './entity/ActionMenu';
import { Badwords } from './entity/Badwords';
import { BadwordsType } from './entity/BadwordsType';
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
import { PpBlocked } from './entity/PpBlocked';
import { PpBlockedHistory } from './entity/PpBlockedHistory';
import { PpMaster } from './entity/PpMaster';
import { PpMasterHistory } from './entity/PpMasterHistory';
import { PpMasterTransactionState } from './entity/PpMasterTransactionState';
import { PpMasterTransactionNumberCount } from './entity/PpMasterTransactionNumberCount';
import { Province } from './entity/Province';
import { SubDistrict } from './entity/SubDistrict';
import { TransactionType } from './entity/TransactionType';
import { Whitelist } from './entity/Whitelist';
import { DispersalPp } from './entity/DispersalPp';
import { DispersalPpActivities } from './entity/DispersalPpActivities';
import { DispersalPpBenefit } from './entity/DispersalPpBenefit';
import { DispersalPpOwner } from './entity/DispersalPpOwner';
import { DispersalReason } from './entity/DispersalReason';
import { DispersalPpHistory } from './entity/DispersalPpHistory';
import { PpProfileLeads } from './entity/PpProfileLeads';
import { BenefitCriteria } from './entity/BenefitCriteria';
import { PpProfileState } from './entity/PpProfileState';
import { ElasticSearchResponse, ElasticLibrary } from './lib/elastic-search';
import { Section } from './entity/Section';
import { TrackingDownloadSection } from './entity/TrackingDownloadSection';
import { TrackingDownloadDetail } from './entity/TrackingDownloadDetail';
import { TrackingDownloadCounter } from './entity/TrackingDownloadCounter';
/**
 * Another lib
 */
import { Jwt } from './lib/jwt';
import { Logger } from './lib/logger';
import { KafkaLibrary, kafkaMessageInterface } from './lib/kafka-library';
import { RedisConnect } from './lib/redis-connect';
export declare const connection: (config: ConnectionOptions) => Promise<Connection>;
export { RedisConnect, KafkaLibrary, kafkaMessageInterface, ElasticSearchResponse, ElasticLibrary, Jwt, Logger, Connection, AccessMenu, ActionMenu, Badwords, BadwordsType, Base, Blacklist, BlacklistType, City, Country, District, EstablishmentPp, EstablishmentPpActivities, EstablishmentPpBenefit, EstablishmentPpHistory, EstablishmentPpOwner, ModificationPp, ModificationPpActivities, ModificationPpBenefit, ModificationPpHistory, ModificationPpOwner, GlobalParam, Group, Identity, IdentityEmail, IdentityGroup, IdentityNik, Kbli, Menu, NormalizationWords, Position, PpBlocked, PpBlockedHistory, PpMaster, PpMasterHistory, PpMasterTransactionState, PpMasterTransactionNumberCount, Province, SubDistrict, TransactionType, Whitelist, DispersalPp, DispersalPpActivities, DispersalPpBenefit, DispersalPpOwner, DispersalReason, DispersalPpHistory, PpProfileLeads, BenefitCriteria, PpProfileState, TrackingDownloadSection, TrackingDownloadDetail, TrackingDownloadCounter, Section, };
