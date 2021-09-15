"use strict";
// process.env['ELASTICSEARCH_LOGS'] = 'http://192.168.71.22:9200';
// process.env['SERVICE_NAME'] = 'pp-be';
Object.defineProperty(exports, "__esModule", { value: true });
var dukcapil_store_client_1 = require("../lib/dukcapil-store-client");
var verify = dukcapil_store_client_1.DukcapilStoreClient.store({
    nik: '3173021404941002',
    param: [
        {
            nomor_sertifikat: 'AHU-000142.AH.01.30.Tahun 2021',
        },
    ],
})
    .then(function (s) { return console.log(s); })
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-dukcapil-store.js.map