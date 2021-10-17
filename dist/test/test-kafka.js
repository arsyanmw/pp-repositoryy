"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var kafkaLibrary = new __1.KafkaLibrary();
kafkaLibrary.sendMessages([
    {
        key: '10',
        value: JSON.stringify({
            number: 1,
            string: 'string nih',
        }),
    },
], 'test-repos');
//# sourceMappingURL=test-kafka.js.map