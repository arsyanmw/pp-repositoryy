/* eslint @typescript-eslint/no-var-requires: "off" */
import debugFormat from 'winston-format-debug';
import { ElasticsearchTransport } from 'winston-elasticsearch';
const winston = require('winston');

const ELASTICSEARCH_LOGS = process.env.ELASTICSEARCH_LOGS || 'http://127.0.0.1:9200';
const SERVICE_NAME = process.env.SERVICE_NAME || 'service-local';
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

class Logger {
    private esTransport = new ElasticsearchTransport({
        clientOpts: {
            node: ELASTICSEARCH_LOGS,
            maxRetries: 2,
            requestTimeout: 60000,
            sniffOnStart: true,
        },
        indexPrefix: `logs-${SERVICE_NAME}-${ENVIRONMENT}`,
        indexSuffixPattern: 'YYYY.MM.DD',
    });

    private consoleLogger = winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.Console({
                handleExceptions: true,
                format: winston.format.combine(
                    winston.format.splat(),
                    winston.format.colorize({ message: true }),
                    debugFormat({
                        colorizeMessage: false,
                    }),
                ),
            }),
        ],
    });

    private contextFunction: string;

    public elasticLogger = winston.createLogger({
        format: winston.format.json(),
        transports: [this.esTransport],
    });

    public eInfo(message: string, fields: any = null) {
        if (fields) {
            this.elasticLogger.info({
                message,
                infoData: fields,
            });
        } else {
            this.elasticLogger.info({
                message,
            });
        }
    }

    public eError(message: string, fields: any = null) {
        if (fields) {
            this.elasticLogger.error({
                message,
                errorData: fields,
            });
        } else {
            this.elasticLogger.error({
                message,
            });
        }
    }

    public eWarn(message: string, fields: any = null) {
        if (fields) {
            this.elasticLogger.warn({
                message,
                warnData: fields,
            });
        } else {
            this.elasticLogger.warn({
                message,
            });
        }
    }

    public info(message: any) {
        this.consoleLogger.info({
            message,
        });
    }

    public error(message: string) {
        this.consoleLogger.error({
            message,
        });
    }

    public infof(message: any, ...meta: any) {
        message = `[${this.contextFunction || ''}] ` + message;
        this.consoleLogger.log('info', message, ...meta);
        return this;
    }

    public start(contextFunction: string) {
        this.contextFunction = contextFunction;
        this.infof('START');
        return this;
    }

    public end() {
        this.infof('END');
        this.contextFunction = null;
    }
}

export { Logger };
