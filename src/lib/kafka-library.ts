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
    private logLevel: logLevel;
    private optionConfig: any;

    constructor(logLevelKafka: logLevel = logLevel.ERROR, optionConfig: any = {}) {
        this.logLevel = logLevelKafka;
        this.optionConfig = optionConfig;
    }

    private createKafkaConnection(): Kafka {
        const brokers = this.getBroker();

        return new Kafka({
            logLevel: this.logLevel,
            brokers,
            clientId: this.getApplicationId(),
            ...this.optionConfig,
        });
    }

    private createProducers(): Producer {
        const kafka: Kafka = this.createKafkaConnection();
        return kafka.producer({
            idempotent: true,
            maxInFlightRequests: 5,
        });
    }

    private getApplicationId(): string {
        return `${KafkaLibrary.serviceName}-${KafkaLibrary.environment}`;
    }

    public getBroker(): Array<string> {
        return KafkaLibrary.kafkaBroker.trim().split(',');
    }

    public getTopicPostfix(topic: string): string {
        return `${topic.trim()}-${KafkaLibrary.environment}`;
    }

    public getConsumer(group: string): Consumer {
        return this.createKafkaConnection().consumer({
            groupId: `${group}-${this.getApplicationId()}`,
        });
    }

    public async sendMessages(
        messages: kafkaMessageInterface[],
        topic: string,
    ): Promise<kafkaLibraryResponseInterface> {
        const producer = this.createProducers();
        try {
            await producer.connect();
            const result = await producer.send({
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
            console.error(`KafkaLibrary/sendMessages Error Message - ${error.message}`, JSON.stringify(error));
            console.error(`KafkaLibrary/sendMessages Error Data -`, topic, JSON.stringify(messages));
            return {
                status: 400,
                message: error.message,
            };
        } finally {
            console.log(`KafkaLibrary/sendMessages Data -`, topic, JSON.stringify(messages));
            await producer.disconnect();
        }
    }
}

export { KafkaLibrary, kafkaMessageInterface };
