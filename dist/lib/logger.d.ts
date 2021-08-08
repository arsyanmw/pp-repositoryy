declare class Logger {
    private esTransport;
    consoleLogger: any;
    private contextFunction;
    elasticLogger: any;
    eInfo(message: string, fields?: any): void;
    eError(message: string, fields?: any): void;
    eWarn(message: string, fields?: any): void;
    info(message: any): void;
    error(message: string): void;
    infof(message: any, ...meta: any): this;
    start(contextFunction: string): this;
    end(): void;
}
export { Logger };
