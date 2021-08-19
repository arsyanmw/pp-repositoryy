"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dukcapil_client_1 = require("../lib/dukcapil-client");
var verify = dukcapil_client_1.DukcapilClient.nikVerifByElement({
    nik: '3173044607870002',
    fullName: 'iyulianti',
    threshold: '80',
    birthDate: new Date('07-06-1990'),
})
    .then(function (s) { return console.log(s.data.content); })
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-dukcapil.js.map