import { KafkaLibrary } from '../';

const kafkaLibrary: KafkaLibrary = new KafkaLibrary();

kafkaLibrary.sendMessages(
    [
        {
            key: '10',
            value: JSON.stringify({
                number: 1,
                string: 'string nih',
            }),
        },
    ],
    'test-repos',
);
