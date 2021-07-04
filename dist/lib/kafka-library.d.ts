import { Consumer } from 'kafkajs';
interface kafkaMessageInterface {
    key?: string;
    value: string;
}
declare class KafkaLibrary {
    private static readonly kafkaBroker;
    private static readonly serviceName;
    private static readonly environment;
    private applicationId;
    private producer;
    private consumer;
    constructor();
    getTopicPostfix(topic: string): string;
    getConsumer(): Consumer;
    sendMessages(messages: kafkaMessageInterface[], topic: string): Promise<any>;
}
export { KafkaLibrary, kafkaMessageInterface };
