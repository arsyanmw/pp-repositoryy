declare module 'redis' {
    type Option = 'EX' | 'PX' | 'EXAT' | 'PXAT' | 'NX' | 'XX' | 'KEEPTTL' | 'GET';

    export interface RedisClient extends NodeJS.EventEmitter {
        setAsync(key: string, value: string, Option?: Option, vaueOption?: any): Promise<any>;
        getAsync(key: string): Promise<string>;
        del(key: string): Promise<string>;
        keysAsync(key: string, resp?: any): Promise<any>;
    }
}
