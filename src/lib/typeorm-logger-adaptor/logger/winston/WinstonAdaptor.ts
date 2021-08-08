import { LoggerOptions as TypeOrmLoggerOptions } from 'typeorm/logger/LoggerOptions';
import { LeveledLogMethod, Logger as WinstonLogger } from 'winston';

import { LoggerMethods, TypeOrmLoggerBase } from '../../core/TypeOrmLoggerBase';
import { TextFormatter } from '../../core/formatter/TextFormatter';

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

export class WinstonAdaptor extends TypeOrmLoggerBase {
    /**
     * Creates a new Winston adaptor.
     *
     * @constructor
     * @param {WinstonLogger} logger - The logger instance of the Winston logger.
     * @param {TypeOrmLoggerOptions} options - LoggerOptions of the TypeORM.
     * @param {boolean} highlightSqlEnabled - Sets true to enable SQL highlighting.
     * @param {WinstonLoggerMethodMapping} loggerMethodMapping - Mappings between Winston logger methods and TypeORM logger methods.
     */
    constructor(
        logger: WinstonLogger,
        options: TypeOrmLoggerOptions,
        highlightSqlEnabled = false,
        loggerMethodMapping?: WinstonLoggerMethodMapping,
    ) {
        super(
            WinstonAdaptor.toLoggerMethods(logger, loggerMethodMapping),
            new TextFormatter(highlightSqlEnabled),
            options,
        );
    }

    static toLoggerMethods(
        logger: WinstonLogger,
        logLevelMapping: WinstonLoggerMethodMapping | undefined,
    ): LoggerMethods {
        if (logLevelMapping === undefined) {
            return this.createLoggerMethods({
                log: (first: unknown, ...rest: unknown[]) =>
                    logger.debug('typeorm', { textMessage: first as string, ...rest }),
                info: (first: unknown, ...rest: unknown[]) =>
                    logger.info('typeorm', { textMessage: first as string, ...rest }),
                warn: (first: unknown, ...rest: unknown[]) =>
                    logger.warn('typeorm', { textMessage: first as string, ...rest }),
                error: (first: unknown, ...rest: unknown[]) =>
                    logger.error('typeorm', { textMessage: first as string, ...rest }),
            });
        }

        const { log, info, warn, error, query, queryError, querySlow, schemaBuild, migration } = logLevelMapping;
        const result = this.createLoggerMethods({
            log: (first: unknown, ...rest: unknown[]) => log('typeorm', { textMessage: first as string, ...rest }),
            info: (first: unknown, ...rest: unknown[]) => info('typeorm', { textMessage: first as string, ...rest }),
            warn: (first: unknown, ...rest: unknown[]) => warn('typeorm', { textMessage: first as string, ...rest }),
            error: (first: unknown, ...rest: unknown[]) => error('typeorm', { textMessage: first as string, ...rest }),
        });

        if (query !== undefined) {
            result.query = (first: unknown, ...rest: unknown[]) =>
                query('typeorm', { textMessage: first as string, ...rest });
        }
        if (queryError !== undefined) {
            result.queryError = (first: unknown, ...rest: unknown[]) =>
                queryError('typeorm', { textMessage: first as string, ...rest });
        }
        if (querySlow !== undefined) {
            result.querySlow = (first: unknown, ...rest: unknown[]) =>
                querySlow('typeorm', { textMessage: first as string, ...rest });
        }
        if (schemaBuild !== undefined) {
            result.schemaBuild = (first: unknown, ...rest: unknown[]) =>
                schemaBuild('typeorm', { textMessage: first as string, ...rest });
        }
        if (migration !== undefined) {
            result.migration = (first: unknown, ...rest: unknown[]) =>
                migration('typeorm', { textMessage: first as string, ...rest });
        }

        return result;
    }
}
