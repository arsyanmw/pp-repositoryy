"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmLoggerBase = void 0;
function isLoggerMethods(loggerMethods) {
    var t = loggerMethods;
    return (t.query !== undefined &&
        t.queryError !== undefined &&
        t.querySlow !== undefined &&
        t.schemaBuild !== undefined &&
        t.migration !== undefined);
}
var TypeOrmLoggerBase = /** @class */ (function () {
    function TypeOrmLoggerBase(loggerMethods, formatter, options) {
        this.formatter = formatter;
        this.loggerMethods = Object.assign(loggerMethods);
        var array = options instanceof Array ? options : [];
        if (options !== 'all' && options !== true) {
            if (!array.includes('query')) {
                this.loggerMethods.query = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('error')) {
                this.loggerMethods.queryError = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('schema')) {
                this.loggerMethods.schemaBuild = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('migration')) {
                this.loggerMethods.migration = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('warn')) {
                this.loggerMethods.warn = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('info')) {
                this.loggerMethods.info = TypeOrmLoggerBase.NOOP;
            }
            if (!array.includes('log')) {
                this.loggerMethods.log = TypeOrmLoggerBase.NOOP;
            }
        }
    }
    TypeOrmLoggerBase.createLoggerMethods = function (loggerMethods) {
        if (isLoggerMethods(loggerMethods)) {
            return loggerMethods;
        }
        var result = {
            log: loggerMethods.log,
            info: loggerMethods.info,
            warn: loggerMethods.warn,
            error: loggerMethods.error,
        };
        result.query = result.info;
        result.queryError = result.error;
        result.querySlow = result.warn;
        result.schemaBuild = result.log;
        result.migration = result.log;
        return result;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    TypeOrmLoggerBase.prototype.logQuery = function (query, parameters, queryRunner) {
        this._logQuery(query, parameters);
    };
    TypeOrmLoggerBase.prototype._logQuery = function (query, parameters) {
        this.loggerMethods.query(this.formatter.formatQuery(query, parameters));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    TypeOrmLoggerBase.prototype.logQueryError = function (error, query, parameters, queryRunner) {
        this._logQueryError(error, query, parameters);
    };
    TypeOrmLoggerBase.prototype._logQueryError = function (error, query, parameters) {
        this.loggerMethods.queryError(this.formatter.formatQueryError(error, query, parameters), error);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    TypeOrmLoggerBase.prototype.logQuerySlow = function (time, query, parameters, queryRunner) {
        this._logQuerySlow(time, query, parameters);
    };
    TypeOrmLoggerBase.prototype._logQuerySlow = function (time, query, parameters) {
        this.loggerMethods.querySlow(this.formatter.formatQuerySlow(time, query, parameters));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    TypeOrmLoggerBase.prototype.logSchemaBuild = function (message, queryRunner) {
        this._logSchemaBuild(message);
    };
    TypeOrmLoggerBase.prototype._logSchemaBuild = function (message) {
        this.loggerMethods.schemaBuild(message);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    TypeOrmLoggerBase.prototype.logMigration = function (message, queryRunner) {
        this._logMigration(message);
    };
    TypeOrmLoggerBase.prototype._logMigration = function (message) {
        this.loggerMethods.migration(message);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    TypeOrmLoggerBase.prototype.log = function (level, message, queryRunner) {
        this.loggerMethods[level](message);
    };
    TypeOrmLoggerBase.NOOP = function () {
        return;
    };
    return TypeOrmLoggerBase;
}());
exports.TypeOrmLoggerBase = TypeOrmLoggerBase;
//# sourceMappingURL=TypeOrmLoggerBase.js.map