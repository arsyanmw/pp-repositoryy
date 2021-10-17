import { Kafka, CompressionTypes, logLevel, Producer, Consumer, CompressionCodecs } from 'kafkajs';

// eslint-disable-next-line
const SnappyCodec = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

interface kafkaMessageInterface {
    key?: string;
    value: string;
}
interface kafkaLibraryResponseInterface {
    status: number;
    message?: string;
    data?: any;
}
class KafkaLibrary {
    private static readonly kafkaBroker: string = process.env.KAFKA_BROKER || '127.0.0.1:9092';
    private static readonly serviceName: string = process.env.SERVICE_NAME || 'service-local';
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private applicationId: string;
    private kafka: Kafka;
    private producer: Producer;

    constructor(logLevelKafka: logLevel = logLevel.ERROR, optionConfig: any = {}) {
        const brokers = KafkaLibrary.kafkaBroker.trim().split(',');
        this.applicationId = `${KafkaLibrary.serviceName}-${KafkaLibrary.environment}`;

        this.kafka = new Kafka({
            logLevel: logLevelKafka,
            brokers,
            clientId: this.applicationId,
            ...optionConfig,
        });
        this.producer = this.kafka.producer({
            idempotent: true,
            maxInFlightRequests: 5,
        });
    }

    public getBroker(): Array<string> {
        return KafkaLibrary.kafkaBroker.trim().split(',');
    }

    public getTopicPostfix(topic: string): string {
        return `${topic.trim()}-${KafkaLibrary.environment}`;
    }

    public getConsumer(group: string): Consumer {
        return this.kafka.consumer({
            groupId: `${group}-${this.applicationId}`,
        });
    }

    public async sendMessages(
        messages: kafkaMessageInterface[],
        topic: string,
    ): Promise<kafkaLibraryResponseInterface> {
        try {
            await this.producer.connect();
            const result = await this.producer.send({
                topic: this.getTopicPostfix(topic),
                compression: CompressionTypes.Snappy,
                messages,
            });
            return {
                status: 200,
                message: 'success',
                data: result,
            };
        } catch (error) {
            console.error(`KafkaLibrary/sendMessages Error Message - ${error.message}`, error);
            console.error(`KafkaLibrary/sendMessages Error Data -`, topic, messages);
            return {
                status: 400,
                message: error.message,
            };
        } finally {
            console.log(`KafkaLibrary/sendMessages Data -`, topic, messages);
            await this.producer.disconnect();
        }
    }
}

export { KafkaLibrary, kafkaMessageInterface };
