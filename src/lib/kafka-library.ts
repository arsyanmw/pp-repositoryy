import { Kafka, CompressionTypes, logLevel, Producer, Consumer, CompressionCodecs } from 'kafkajs';

// eslint-disable-next-line
const SnappyCodec = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

interface kafkaMessageInterface {
    key?: string;
    value: string;
}

class KafkaLibrary {
    private static readonly kafkaBroker: string = process.env.KAFKA_BROKER || '192.168.71.7:31454';
    private static readonly serviceName: string = process.env.SERVICE_NAME || 'service-local';
    private static readonly environment: string = process.env.ENVIRONMENT || 'development';
    private applicationId: string;
    private producer: Producer;
    private consumer: Consumer;

    constructor() {
        const brokers = KafkaLibrary.kafkaBroker.trim().split(',');
        this.applicationId = `${KafkaLibrary.serviceName}-${KafkaLibrary.environment}`;
        const kafka: Kafka = new Kafka({
            logLevel: logLevel.DEBUG,
            brokers,
            clientId: this.applicationId,
        });
        this.producer = kafka.producer({
            idempotent: true,
            maxInFlightRequests: 5,
        });

        this.consumer = kafka.consumer({
            groupId: this.applicationId,
        });
    }

    public getTopicPostfix(topic: string): string {
        return `${topic.trim()}-${KafkaLibrary.environment}`;
    }

    public getConsumer(): Consumer {
        return this.consumer;
    }

    public async sendMessages(messages: kafkaMessageInterface[], topic: string): Promise<any> {
        try {
            await this.producer.connect();
            const result = await this.producer.send({
                topic: this.getTopicPostfix(topic),
                compression: CompressionTypes.Snappy,
                messages,
            });
            return result;
        } catch (error) {
            console.error(`[example/producer] ${error.message}`, error);
            return 'failed';
        } finally {
            await this.producer.disconnect();
        }
    }
}

export { KafkaLibrary, kafkaMessageInterface };
