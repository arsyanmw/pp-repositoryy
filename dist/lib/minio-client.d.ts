declare class MinioClient {
    static getClient(): any;
    static upload(filename: string, path: string): Promise<string>;
}
export { MinioClient };
