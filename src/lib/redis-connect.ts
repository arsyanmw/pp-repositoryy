import { promisifyAll } from 'bluebird';
import { RedisClient, Option } from 'redis';
// eslint-disable-next-line
const redis = require('redis');
promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);

class RedisConnect {
    private static readonly redisHost: string = process.env.REDIS_HOST || '127.0.0.1';
    private static readonly redisPort: string = process.env.REDIS_PORT || '6379';
    private client: RedisClient;

    constructor(db = 0) {
        this.client = redis.createClient({
            host: RedisConnect.redisHost,
            port: RedisConnect.redisPort,
            db,
        });
    }
    public async set(key: string, value: string, option?: Option, valueOption?: any): Promise<any> {
        let result;
        if (option && valueOption) {
            result = this.client.setAsync(key, value, option, valueOption);
        } else if (option) {
            result = this.client.setAsync(key, value, option);
        } else {
            result = this.client.setAsync(key, value);
        }

        return await result;
    }

    public async setJson(
        key: string,
        value: { [key: string]: unknown },
        option?: Option,
        valueOption?: any,
    ): Promise<any> {
        const valueStringify: string = JSON.stringify(value);
        const result = await this.set(key, valueStringify, option, valueOption);
        if (option == 'GET') {
            return JSON.parse(result);
        }
        return result;
    }

    public async get(key: string): Promise<any> {
        return await this.client.getAsync(key);
    }

    public async delete(key: string): Promise<any> {
        return await this.client.del(key);
    }

    public async getJson(key: string): Promise<{ [key: string]: unknown }> {
        return JSON.parse(await this.client.getAsync(key));
    }
}

export { RedisConnect };
