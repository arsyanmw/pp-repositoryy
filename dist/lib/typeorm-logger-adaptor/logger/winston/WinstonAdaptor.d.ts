import { LoggerOptions as TypeOrmLoggerOptions } from 'typeorm/logger/LoggerOptions';
import { LeveledLogMethod, Logger as WinstonLogger } from 'winston';
import { LoggerMethods, TypeOrmLoggerBase } from '../../core/TypeOrmLoggerBase';
export interface WinstonLoggerMethodMapping {
    log: LeveledLogMethod;
    info: LeveledLogMethod;
    warn: LeveledLogMethod;
    error: LeveledLogMethod;
    query?: LeveledLogMethod;
    queryError?: LeveledLogMethod;
    querySlow?: LeveledLogMethod;
    schemaBuild?: LeveledLogMethod;
    migration?: LeveledLogMethod;
}
export declare class WinstonAdaptor extends TypeOrmLoggerBase {
    /**
     * Creates a new Winston adaptor.
     *
     * @constructor
     * @param {WinstonLogger} logger - The logger instance of the Winston logger.
     * @param {TypeOrmLoggerOptions} options - LoggerOptions of the TypeORM.
     * @param {boolean} highlightSqlEnabled - Sets true to enable SQL highlighting.
     * @param {WinstonLoggerMethodMapping} loggerMethodMapping - Mappings between Winston logger methods and TypeORM logger methods.
     */
    constructor(logger: WinstonLogger, options: TypeOrmLoggerOptions, highlightSqlEnabled?: boolean, loggerMethodMapping?: WinstonLoggerMethodMapping);
    static toLoggerMethods(logger: WinstonLogger, logLevelMapping: WinstonLoggerMethodMapping | undefined): LoggerMethods;
}
