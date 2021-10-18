"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var kafkaLibrary = new __1.KafkaLibrary();
kafkaLibrary
    .sendMessages([
    {
        key: '10',
        value: JSON.stringify({
            number: 1,
            string: 'string nih',
        }),
    },
], 'test-repos')
    .then(function (r) { return console.log('success', r); })
    .catch(function (e) { return console.log('error', e); });
//# sourceMappingURL=test-kafka.js.map