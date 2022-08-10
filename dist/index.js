"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PpMasterTransactionNumberCount = exports.PpMasterTransactionState = exports.PpMasterHistory = exports.PpMaster = exports.PpBlockedHistory = exports.PpBlocked = exports.Position = exports.NormalizationWords = exports.Menu = exports.Kbli = exports.IdentityNik = exports.IdentityGroup = exports.IdentityEmail = exports.Identity = exports.Group = exports.GlobalParam = exports.ModificationPpOwner = exports.ModificationPpHistory = exports.ModificationPpBenefit = exports.ModificationPpActivities = exports.ModificationPp = exports.EstablishmentPpOwner = exports.EstablishmentPpHistory = exports.EstablishmentPpBenefit = exports.EstablishmentPpActivities = exports.EstablishmentPp = exports.District = exports.Country = exports.City = exports.BlacklistType = exports.Blacklist = exports.Base = exports.BadwordsType = exports.Badwords = exports.AnnouncementTransaction = exports.AnnouncementNews = exports.ActionMenu = exports.AccessMenu = exports.Connection = exports.Logger = exports.Jwt = exports.AuditTrailDataType = exports.AuditTrail = exports.ElasticLibrary = exports.KafkaLibrary = exports.RedisConnect = exports.ClientInformation = exports.ErrorCode = exports.ServiceResponse = exports.connection = void 0;
exports.FinancePpTransactionNumberCount = exports.FinancePpHistory = exports.Finance = exports.CorrectionPpActivities = exports.CorrectionPpPrevious = exports.CorrectionPpOwner = exports.CorrectionPp = exports.Section = exports.TrackingDownloadCounter = exports.TrackingDownloadDetail = exports.TrackingDownloadSection = exports.PpProfileState = exports.BenefitCriteria = exports.PpProfileLeads = exports.DispersalPpHistory = exports.DispersalReason = exports.DispersalPpOwner = exports.DispersalPpBenefit = exports.DispersalPpActivities = exports.DispersalPp = exports.Whitelist = exports.TransactionType = exports.SubDistrict = exports.Province = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return typeorm_1.Connection; } });
var winston_1 = require("./lib/typeorm-logger-adaptor/logger/winston");
/**
 * Alphabetic entity import
 */
var AccessMenu_1 = require("./entity/AccessMenu");
Object.defineProperty(exports, "AccessMenu", { enumerable: true, get: function () { return AccessMenu_1.AccessMenu; } });
var ActionMenu_1 = require("./entity/ActionMenu");
Object.defineProperty(exports, "ActionMenu", { enumerable: true, get: function () { return ActionMenu_1.ActionMenu; } });
var AnnouncementNews_1 = require("./entity/AnnouncementNews");
Object.defineProperty(exports, "AnnouncementNews", { enumerable: true, get: function () { return AnnouncementNews_1.AnnouncementNews; } });
var AnnouncementTransaction_1 = require("./entity/AnnouncementTransaction");
Object.defineProperty(exports, "AnnouncementTransaction", { enumerable: true, get: function () { return AnnouncementTransaction_1.AnnouncementTransaction; } });
var Badwords_1 = require("./entity/Badwords");
Object.defineProperty(exports, "Badwords", { enumerable: true, get: function () { return Badwords_1.Badwords; } });
var BadwordsType_1 = require("./entity/BadwordsType");
Object.defineProperty(exports, "BadwordsType", { enumerable: true, get: function () { return BadwordsType_1.BadwordsType; } });
var Base_1 = require("./entity/Base");
Object.defineProperty(exports, "Base", { enumerable: true, get: function () { return Base_1.Base; } });
var Blacklist_1 = require("./entity/Blacklist");
Object.defineProperty(exports, "Blacklist", { enumerable: true, get: function () { return Blacklist_1.Blacklist; } });
var BlacklistType_1 = require("./entity/BlacklistType");
Object.defineProperty(exports, "BlacklistType", { enumerable: true, get: function () { return BlacklistType_1.BlacklistType; } });
var City_1 = require("./entity/City");
Object.defineProperty(exports, "City", { enumerable: true, get: function () { return City_1.City; } });
var Country_1 = require("./entity/Country");
Object.defineProperty(exports, "Country", { enumerable: true, get: function () { return Country_1.Country; } });
var District_1 = require("./entity/District");
Object.defineProperty(exports, "District", { enumerable: true, get: function () { return District_1.District; } });
var EstablishmentPp_1 = require("./entity/EstablishmentPp");
Object.defineProperty(exports, "EstablishmentPp", { enumerable: true, get: function () { return EstablishmentPp_1.EstablishmentPp; } });
var EstablishmentPpActivities_1 = require("./entity/EstablishmentPpActivities");
Object.defineProperty(exports, "EstablishmentPpActivities", { enumerable: true, get: function () { return EstablishmentPpActivities_1.EstablishmentPpActivities; } });
var EstablishmentPpBenefit_1 = require("./entity/EstablishmentPpBenefit");
Object.defineProperty(exports, "EstablishmentPpBenefit", { enumerable: true, get: function () { return EstablishmentPpBenefit_1.EstablishmentPpBenefit; } });
var EstablishmentPpHistory_1 = require("./entity/EstablishmentPpHistory");
Object.defineProperty(exports, "EstablishmentPpHistory", { enumerable: true, get: function () { return EstablishmentPpHistory_1.EstablishmentPpHistory; } });
var EstablishmentPpOwner_1 = require("./entity/EstablishmentPpOwner");
Object.defineProperty(exports, "EstablishmentPpOwner", { enumerable: true, get: function () { return EstablishmentPpOwner_1.EstablishmentPpOwner; } });
var ModificationPp_1 = require("./entity/ModificationPp");
Object.defineProperty(exports, "ModificationPp", { enumerable: true, get: function () { return ModificationPp_1.ModificationPp; } });
var ModificationPpActivities_1 = require("./entity/ModificationPpActivities");
Object.defineProperty(exports, "ModificationPpActivities", { enumerable: true, get: function () { return ModificationPpActivities_1.ModificationPpActivities; } });
var ModificationPpBenefit_1 = require("./entity/ModificationPpBenefit");
Object.defineProperty(exports, "ModificationPpBenefit", { enumerable: true, get: function () { return ModificationPpBenefit_1.ModificationPpBenefit; } });
var ModificationPpHistory_1 = require("./entity/ModificationPpHistory");
Object.defineProperty(exports, "ModificationPpHistory", { enumerable: true, get: function () { return ModificationPpHistory_1.ModificationPpHistory; } });
var ModificationPpOwner_1 = require("./entity/ModificationPpOwner");
Object.defineProperty(exports, "ModificationPpOwner", { enumerable: true, get: function () { return ModificationPpOwner_1.ModificationPpOwner; } });
var GlobalParam_1 = require("./entity/GlobalParam");
Object.defineProperty(exports, "GlobalParam", { enumerable: true, get: function () { return GlobalParam_1.GlobalParam; } });
var Group_1 = require("./entity/Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
var Identity_1 = require("./entity/Identity");
Object.defineProperty(exports, "Identity", { enumerable: true, get: function () { return Identity_1.Identity; } });
var IdentityEmail_1 = require("./entity/IdentityEmail");
Object.defineProperty(exports, "IdentityEmail", { enumerable: true, get: function () { return IdentityEmail_1.IdentityEmail; } });
var IdentityGroup_1 = require("./entity/IdentityGroup");
Object.defineProperty(exports, "IdentityGroup", { enumerable: true, get: function () { return IdentityGroup_1.IdentityGroup; } });
var IdentityNik_1 = require("./entity/IdentityNik");
Object.defineProperty(exports, "IdentityNik", { enumerable: true, get: function () { return IdentityNik_1.IdentityNik; } });
var Kbli_1 = require("./entity/Kbli");
Object.defineProperty(exports, "Kbli", { enumerable: true, get: function () { return Kbli_1.Kbli; } });
var Menu_1 = require("./entity/Menu");
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return Menu_1.Menu; } });
var NormalizationWords_1 = require("./entity/NormalizationWords");
Object.defineProperty(exports, "NormalizationWords", { enumerable: true, get: function () { return NormalizationWords_1.NormalizationWords; } });
var Position_1 = require("./entity/Position");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return Position_1.Position; } });
var PpBlocked_1 = require("./entity/PpBlocked");
Object.defineProperty(exports, "PpBlocked", { enumerable: true, get: function () { return PpBlocked_1.PpBlocked; } });
var PpBlockedHistory_1 = require("./entity/PpBlockedHistory");
Object.defineProperty(exports, "PpBlockedHistory", { enumerable: true, get: function () { return PpBlockedHistory_1.PpBlockedHistory; } });
var PpMaster_1 = require("./entity/PpMaster");
Object.defineProperty(exports, "PpMaster", { enumerable: true, get: function () { return PpMaster_1.PpMaster; } });
var PpMasterHistory_1 = require("./entity/PpMasterHistory");
Object.defineProperty(exports, "PpMasterHistory", { enumerable: true, get: function () { return PpMasterHistory_1.PpMasterHistory; } });
var PpMasterTransactionState_1 = require("./entity/PpMasterTransactionState");
Object.defineProperty(exports, "PpMasterTransactionState", { enumerable: true, get: function () { return PpMasterTransactionState_1.PpMasterTransactionState; } });
var PpMasterTransactionNumberCount_1 = require("./entity/PpMasterTransactionNumberCount");
Object.defineProperty(exports, "PpMasterTransactionNumberCount", { enumerable: true, get: function () { return PpMasterTransactionNumberCount_1.PpMasterTransactionNumberCount; } });
var Province_1 = require("./entity/Province");
Object.defineProperty(exports, "Province", { enumerable: true, get: function () { return Province_1.Province; } });
var SubDistrict_1 = require("./entity/SubDistrict");
Object.defineProperty(exports, "SubDistrict", { enumerable: true, get: function () { return SubDistrict_1.SubDistrict; } });
var TransactionType_1 = require("./entity/TransactionType");
Object.defineProperty(exports, "TransactionType", { enumerable: true, get: function () { return TransactionType_1.TransactionType; } });
var Whitelist_1 = require("./entity/Whitelist");
Object.defineProperty(exports, "Whitelist", { enumerable: true, get: function () { return Whitelist_1.Whitelist; } });
var DispersalPp_1 = require("./entity/DispersalPp");
Object.defineProperty(exports, "DispersalPp", { enumerable: true, get: function () { return DispersalPp_1.DispersalPp; } });
var DispersalPpActivities_1 = require("./entity/DispersalPpActivities");
Object.defineProperty(exports, "DispersalPpActivities", { enumerable: true, get: function () { return DispersalPpActivities_1.DispersalPpActivities; } });
var DispersalPpBenefit_1 = require("./entity/DispersalPpBenefit");
Object.defineProperty(exports, "DispersalPpBenefit", { enumerable: true, get: function () { return DispersalPpBenefit_1.DispersalPpBenefit; } });
var DispersalPpOwner_1 = require("./entity/DispersalPpOwner");
Object.defineProperty(exports, "DispersalPpOwner", { enumerable: true, get: function () { return DispersalPpOwner_1.DispersalPpOwner; } });
var DispersalReason_1 = require("./entity/DispersalReason");
Object.defineProperty(exports, "DispersalReason", { enumerable: true, get: function () { return DispersalReason_1.DispersalReason; } });
var DispersalPpHistory_1 = require("./entity/DispersalPpHistory");
Object.defineProperty(exports, "DispersalPpHistory", { enumerable: true, get: function () { return DispersalPpHistory_1.DispersalPpHistory; } });
var PpProfileLeads_1 = require("./entity/PpProfileLeads");
Object.defineProperty(exports, "PpProfileLeads", { enumerable: true, get: function () { return PpProfileLeads_1.PpProfileLeads; } });
var BenefitCriteria_1 = require("./entity/BenefitCriteria");
Object.defineProperty(exports, "BenefitCriteria", { enumerable: true, get: function () { return BenefitCriteria_1.BenefitCriteria; } });
var PpProfileState_1 = require("./entity/PpProfileState");
Object.defineProperty(exports, "PpProfileState", { enumerable: true, get: function () { return PpProfileState_1.PpProfileState; } });
var elastic_search_1 = require("./lib/elastic-search");
Object.defineProperty(exports, "ElasticLibrary", { enumerable: true, get: function () { return elastic_search_1.ElasticLibrary; } });
var Section_1 = require("./entity/Section");
Object.defineProperty(exports, "Section", { enumerable: true, get: function () { return Section_1.Section; } });
var TrackingDownloadSection_1 = require("./entity/TrackingDownloadSection");
Object.defineProperty(exports, "TrackingDownloadSection", { enumerable: true, get: function () { return TrackingDownloadSection_1.TrackingDownloadSection; } });
var TrackingDownloadDetail_1 = require("./entity/TrackingDownloadDetail");
Object.defineProperty(exports, "TrackingDownloadDetail", { enumerable: true, get: function () { return TrackingDownloadDetail_1.TrackingDownloadDetail; } });
var TrackingDownloadCounter_1 = require("./entity/TrackingDownloadCounter");
Object.defineProperty(exports, "TrackingDownloadCounter", { enumerable: true, get: function () { return TrackingDownloadCounter_1.TrackingDownloadCounter; } });
var CorrectionPp_1 = require("./entity/CorrectionPp");
Object.defineProperty(exports, "CorrectionPp", { enumerable: true, get: function () { return CorrectionPp_1.CorrectionPp; } });
var CorrectionPpOwner_1 = require("./entity/CorrectionPpOwner");
Object.defineProperty(exports, "CorrectionPpOwner", { enumerable: true, get: function () { return CorrectionPpOwner_1.CorrectionPpOwner; } });
var CorrectionPpPrevious_1 = require("./entity/CorrectionPpPrevious");
Object.defineProperty(exports, "CorrectionPpPrevious", { enumerable: true, get: function () { return CorrectionPpPrevious_1.CorrectionPpPrevious; } });
var CorrectionPpActivities_1 = require("./entity/CorrectionPpActivities");
Object.defineProperty(exports, "CorrectionPpActivities", { enumerable: true, get: function () { return CorrectionPpActivities_1.CorrectionPpActivities; } });
var Finance_1 = require("./entity/Finance");
Object.defineProperty(exports, "Finance", { enumerable: true, get: function () { return Finance_1.Finance; } });
var FinancePpHistory_1 = require("./entity/FinancePpHistory");
Object.defineProperty(exports, "FinancePpHistory", { enumerable: true, get: function () { return FinancePpHistory_1.FinancePpHistory; } });
var FinancePpTransactionNumberCount_1 = require("./entity/FinancePpTransactionNumberCount");
Object.defineProperty(exports, "FinancePpTransactionNumberCount", { enumerable: true, get: function () { return FinancePpTransactionNumberCount_1.FinancePpTransactionNumberCount; } });
/**
 * Another lib
 */
var jwt_1 = require("./lib/jwt");
Object.defineProperty(exports, "Jwt", { enumerable: true, get: function () { return jwt_1.Jwt; } });
var logger_1 = require("./lib/logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
var kafka_library_1 = require("./lib/kafka-library");
Object.defineProperty(exports, "KafkaLibrary", { enumerable: true, get: function () { return kafka_library_1.KafkaLibrary; } });
var redis_connect_1 = require("./lib/redis-connect");
Object.defineProperty(exports, "RedisConnect", { enumerable: true, get: function () { return redis_connect_1.RedisConnect; } });
var client_information_1 = require("./lib/client-information");
Object.defineProperty(exports, "ClientInformation", { enumerable: true, get: function () { return client_information_1.ClientInformation; } });
var audittrail_1 = require("./lib/audittrail");
Object.defineProperty(exports, "AuditTrail", { enumerable: true, get: function () { return audittrail_1.AuditTrail; } });
Object.defineProperty(exports, "AuditTrailDataType", { enumerable: true, get: function () { return audittrail_1.DataType; } });
var service_response_1 = require("./lib/service-response");
Object.defineProperty(exports, "ServiceResponse", { enumerable: true, get: function () { return service_response_1.ServiceResponse; } });
var global_constant_1 = require("./lib/global-constant");
Object.defineProperty(exports, "ErrorCode", { enumerable: true, get: function () { return global_constant_1.ErrorCode; } });
var connection = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var connectionOptions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connectionOptions = __assign(__assign({}, config), { entities: [__dirname + '/entity/**/*'], migrations: [__dirname + '/migrations/**/*'], logger: config.logger || new winston_1.WinstonAdaptor(new logger_1.Logger().elasticLogger, config.logging || 'all') });
                return [4 /*yield*/, (0, typeorm_1.createConnection)(connectionOptions)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.connection = connection;
//# sourceMappingURL=index.js.map
