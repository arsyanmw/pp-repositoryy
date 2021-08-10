"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonAdaptor = void 0;
var TypeOrmLoggerBase_1 = require("../../core/TypeOrmLoggerBase");
var TextFormatter_1 = require("../../core/formatter/TextFormatter");
var WinstonAdaptor = /** @class */ (function (_super) {
    __extends(WinstonAdaptor, _super);
    /**
     * Creates a new Winston adaptor.
     *
     * @constructor
     * @param {WinstonLogger} logger - The logger instance of the Winston logger.
     * @param {TypeOrmLoggerOptions} options - LoggerOptions of the TypeORM.
     * @param {boolean} highlightSqlEnabled - Sets true to enable SQL highlighting.
     * @param {WinstonLoggerMethodMapping} loggerMethodMapping - Mappings between Winston logger methods and TypeORM logger methods.
     */
    function WinstonAdaptor(logger, options, highlightSqlEnabled, loggerMethodMapping) {
        if (highlightSqlEnabled === void 0) { highlightSqlEnabled = false; }
        return _super.call(this, WinstonAdaptor.toLoggerMethods(logger, loggerMethodMapping), new TextFormatter_1.TextFormatter(highlightSqlEnabled), options) || this;
    }
    WinstonAdaptor.toLoggerMethods = function (logger, logLevelMapping) {
        if (logLevelMapping === undefined) {
            return this.createLoggerMethods({
                log: function (first) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    return logger.debug('typeorm', __assign({ textMessage: first }, rest));
                },
                info: function (first) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    return logger.info('typeorm', __assign({ textMessage: first }, rest));
                },
                warn: function (first) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    return logger.warn('typeorm', __assign({ textMessage: first }, rest));
                },
                error: function (first) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    return logger.error('typeorm', __assign({ textMessage: first }, rest));
                },
            });
        }
        var log = logLevelMapping.log, info = logLevelMapping.info, warn = logLevelMapping.warn, error = logLevelMapping.error, query = logLevelMapping.query, queryError = logLevelMapping.queryError, querySlow = logLevelMapping.querySlow, schemaBuild = logLevelMapping.schemaBuild, migration = logLevelMapping.migration;
        var result = this.createLoggerMethods({
            log: function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return log('typeorm', __assign({ textMessage: first }, rest));
            },
            info: function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return info('typeorm', __assign({ textMessage: first }, rest));
            },
            warn: function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return warn('typeorm', __assign({ textMessage: first }, rest));
            },
            error: function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return error('typeorm', __assign({ textMessage: first }, rest));
            },
        });
        if (query !== undefined) {
            result.query = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return query('typeorm', __assign({ textMessage: first }, rest));
            };
        }
        if (queryError !== undefined) {
            result.queryError = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return queryError('typeorm', __assign({ textMessage: first }, rest));
            };
        }
        if (querySlow !== undefined) {
            result.querySlow = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return querySlow('typeorm', __assign({ textMessage: first }, rest));
            };
        }
        if (schemaBuild !== undefined) {
            result.schemaBuild = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return schemaBuild('typeorm', __assign({ textMessage: first }, rest));
            };
        }
        if (migration !== undefined) {
            result.migration = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                return migration('typeorm', __assign({ textMessage: first }, rest));
            };
        }
        return result;
    };
    return WinstonAdaptor;
}(TypeOrmLoggerBase_1.TypeOrmLoggerBase));
exports.WinstonAdaptor = WinstonAdaptor;
//# sourceMappingURL=WinstonAdaptor.js.map