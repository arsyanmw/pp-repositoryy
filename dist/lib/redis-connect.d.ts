import { Option } from 'redis';
declare class RedisConnect {
    private static readonly redisHost;
    private static readonly redisPort;
    private client;
    constructor(db?: number);
    set(key: string, value: string, option?: Option, valueOption?: any): Promise<any>;
    setJson(key: string, value: {
        [key: string]: unknown;
    }, option?: Option, valueOption?: any): Promise<any>;
    get(key: string): Promise<any>;
    delete(key: string): Promise<any>;
    getJson(key: string): Promise<{
        [key: string]: unknown;
    }>;
    getAll(key: string): Promise<Array<{
        key: string;
        value: string;
    }>>;
    getAllJson(key: string): Promise<Array<{
        key: string;
        value: {
            [key: string]: unknown;
        };
    }>>;
}
export { RedisConnect };
