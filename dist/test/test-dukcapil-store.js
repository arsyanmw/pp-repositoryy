"use strict";
// process.env['ELASTICSEARCH_LOGS'] = 'http://192.168.71.22:9200';
// process.env['SERVICE_NAME'] = 'pp-be';
Object.defineProperty(exports, "__esModule", { value: true });
var dukcapil_store_client_1 = require("../lib/dukcapil-store-client");
var verify = dukcapil_store_client_1.DukcapilStoreClient.store({
    nik: '3173021404941002',
    param: [
        {
            NO_AKTA: '01/384/XVI/08/2020/001',
            DESKRIPSI: 'AKTA KEPEMILIKAN RUKO 300M2',
        },
    ],
})
    .then(function (s) { return console.log(); })
    .catch(function (e) { return console.log(); });
//# sourceMappingURL=test-dukcapil-store.js.map