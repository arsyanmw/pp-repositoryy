"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
var winston_format_debug_1 = require("winston-format-debug");
var winston_elasticsearch_1 = require("winston-elasticsearch");
var winston = require('winston');
var ELASTICSEARCH_LOGS = process.env.ELASTICSEARCH_LOGS || 'http://127.0.0.1:9200';
var SERVICE_NAME = process.env.SERVICE_NAME || 'service-local';
var ENVIRONMENT = process.env.ENVIRONMENT || 'development';
var Logger = /** @class */ (function () {
    function Logger() {
        this.esTransport = new winston_elasticsearch_1.ElasticsearchTransport({
            clientOpts: {
                node: ELASTICSEARCH_LOGS,
                maxRetries: 2,
                requestTimeout: 60000,
                sniffOnStart: true,
            },
            indexPrefix: "logs-" + SERVICE_NAME + "-" + ENVIRONMENT,
            indexSuffixPattern: 'YYYY.MM.DD',
        });
        this.consoleLogger = winston.createLogger({
            format: winston.format.json(),
            transports: [
                new winston.transports.Console({
                    handleExceptions: true,
                    format: winston.format.combine(winston.format.splat(), winston.format.colorize({ message: true }), winston_format_debug_1.default({
                        colorizeMessage: false,
                    })),
                }),
            ],
        });
        this.elasticLogger = winston.createLogger({
            format: winston.format.json(),
            transports: [this.esTransport],
        });
    }
    Logger.prototype.eInfo = function (message, fields) {
        if (fields === void 0) { fields = null; }
        if (fields) {
            this.elasticLogger.info({
                message: message,
                infoData: fields,
            });
        }
        else {
            this.elasticLogger.info({
                message: message,
            });
        }
    };
    Logger.prototype.eError = function (message, fields) {
        if (fields === void 0) { fields = null; }
        if (fields) {
            this.elasticLogger.error({
                message: message,
                errorData: fields,
            });
        }
        else {
            this.elasticLogger.error({
                message: message,
            });
        }
    };
    Logger.prototype.eWarn = function (message, fields) {
        if (fields === void 0) { fields = null; }
        if (fields) {
            this.elasticLogger.warn({
                message: message,
                warnData: fields,
            });
        }
        else {
            this.elasticLogger.warn({
                message: message,
            });
        }
    };
    Logger.prototype.info = function (message) {
        this.consoleLogger.info({
            message: message,
        });
    };
    Logger.prototype.error = function (message) {
        this.consoleLogger.error({
            message: message,
        });
    };
    Logger.prototype.infof = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        message = "[" + (this.contextFunction || '') + "] " + message;
        (_a = this.consoleLogger).log.apply(_a, __spreadArray(['info', message], meta));
        return this;
    };
    Logger.prototype.start = function (contextFunction) {
        this.contextFunction = contextFunction;
        this.infof('START');
        return this;
    };
    Logger.prototype.end = function () {
        this.infof('END');
        this.contextFunction = null;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map