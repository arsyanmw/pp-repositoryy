"use strict";
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
exports.KafkaLibrary = void 0;
var kafkajs_1 = require("kafkajs");
// eslint-disable-next-line
var SnappyCodec = require('kafkajs-snappy');
kafkajs_1.CompressionCodecs[kafkajs_1.CompressionTypes.Snappy] = SnappyCodec;
var KafkaLibrary = /** @class */ (function () {
    function KafkaLibrary() {
        var brokers = KafkaLibrary.kafkaBroker.trim().split(',');
        this.applicationId = KafkaLibrary.serviceName + "-" + KafkaLibrary.environment;
        var kafka = new kafkajs_1.Kafka({
            logLevel: kafkajs_1.logLevel.DEBUG,
            brokers: brokers,
            clientId: this.applicationId,
        });
        this.producer = kafka.producer({
            idempotent: true,
            maxInFlightRequests: 5,
        });
        this.consumer = kafka.consumer({
            groupId: this.applicationId,
        });
    }
    KafkaLibrary.prototype.getTopicPostfix = function (topic) {
        return topic.trim() + "-" + KafkaLibrary.environment;
    };
    KafkaLibrary.prototype.getConsumer = function () {
        return this.consumer;
    };
    KafkaLibrary.prototype.sendMessages = function (messages, topic) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 6]);
                        return [4 /*yield*/, this.producer.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.producer.send({
                                topic: this.getTopicPostfix(topic),
                                compression: kafkajs_1.CompressionTypes.Snappy,
                                messages: messages,
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        console.error("[example/producer] " + error_1.message, error_1);
                        return [2 /*return*/, 'failed'];
                    case 4: return [4 /*yield*/, this.producer.disconnect()];
                    case 5:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    KafkaLibrary.kafkaBroker = process.env.KAFKA_BROKER || '192.168.71.7:31454';
    KafkaLibrary.serviceName = process.env.SERVICE_NAME || 'service-local';
    KafkaLibrary.environment = process.env.ENVIRONMENT || 'development';
    return KafkaLibrary;
}());
exports.KafkaLibrary = KafkaLibrary;
//# sourceMappingURL=kafka-library.js.map