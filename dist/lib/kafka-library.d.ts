import { logLevel, Consumer } from 'kafkajs';
interface kafkaMessageInterface {
    key?: string;
    value: string;
}
interface kafkaLibraryResponseInterface {
    status: number;
    message?: string;
    data?: any;
}
declare class KafkaLibrary {
    private static readonly kafkaBroker;
    private static readonly serviceName;
    private static readonly environment;
    private logLevel;
    private optionConfig;
    constructor(logLevelKafka?: logLevel, optionConfig?: any);
    private createKafkaConnection;
    private createProducers;
    private getApplicationId;
    getBroker(): Array<string>;
    getTopicPostfix(topic: string): string;
    getConsumer(group: string): Consumer;
    sendMessages(messages: kafkaMessageInterface[], topic: string): Promise<kafkaLibraryResponseInterface>;
}
export { KafkaLibrary, kafkaMessageInterface };
