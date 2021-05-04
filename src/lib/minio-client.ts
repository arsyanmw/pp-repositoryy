import { Client } from 'minio';
import * as Fs from 'fs';

class MinioClient {
    public static getClient() {
        const { MINIO_HOST, MINIO_ACCESS_KEY, MINIO_SECRET_KEY } = process.env;
        return new Client({
            endPoint: MINIO_HOST,
            useSSL: false,
            accessKey: MINIO_ACCESS_KEY,
            secretKey: MINIO_SECRET_KEY,
        });
    }
    public static async upload(filename: string, path: string) {
        const { MINIO_BUCKET } = process.env;

        return await new Promise<string>((resolve) => {
            const fileStream = Fs.createReadStream(path);
            Fs.stat(path, function (e, stat) {
                if (e) {
                    resolve(e.message);
                }
                try {
                    MinioClient.getClient().putObject(
                        MINIO_BUCKET,
                        filename,
                        fileStream,
                        stat.size,
                        'application/pdf',
                        function (e) {
                            if (e) {
                                throw e;
                            }
                            resolve(null);
                        },
                    );
                } catch (e) {
                    resolve(e.message);
                }
            });
        });
    }
}

export { MinioClient };
