import { Formatter } from './Formatter';
export declare class TextFormatter implements Formatter {
    private readonly highlightEnabled;
    constructor(highlightEnabled?: boolean);
    formatQuery(query: string, parameters?: unknown[]): string;
    formatQueryError(error: string | Error, query: string, parameters?: unknown[]): string;
    formatQuerySlow(time: number, query: string, parameters?: unknown[]): string;
    private formatQueryWithParameter;
}
