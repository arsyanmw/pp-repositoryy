import { QueryRunner } from 'typeorm';
import { Logger } from 'typeorm/logger/Logger';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';
import { Formatter } from './formatter/Formatter';
export declare type LoggerMethod = (first: unknown, ...rest: unknown[]) => void;
export interface BasicLoggerMethods {
    log: LoggerMethod;
    info: LoggerMethod;
    warn: LoggerMethod;
    error: LoggerMethod;
}
export interface LoggerMethods extends BasicLoggerMethods {
    query: LoggerMethod;
    queryError: LoggerMethod;
    querySlow: LoggerMethod;
    schemaBuild: LoggerMethod;
    migration: LoggerMethod;
}
export declare abstract class TypeOrmLoggerBase implements Logger {
    protected readonly formatter: Formatter;
    private static readonly NOOP;
    protected readonly loggerMethods: LoggerMethods;
    protected constructor(loggerMethods: LoggerMethods, formatter: Formatter, options?: LoggerOptions);
    protected static createLoggerMethods(loggerMethods: LoggerMethods | BasicLoggerMethods): LoggerMethods;
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any;
    protected _logQuery(query: string, parameters?: unknown[]): void;
    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): any;
    protected _logQueryError(error: string | Error, query: string, parameters?: unknown[]): void;
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any;
    protected _logQuerySlow(time: number, query: string, parameters?: unknown[]): void;
    logSchemaBuild(message: string, queryRunner?: QueryRunner): any;
    protected _logSchemaBuild(message: string): void;
    logMigration(message: string, queryRunner?: QueryRunner): any;
    protected _logMigration(message: string): void;
    log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): any;
}
