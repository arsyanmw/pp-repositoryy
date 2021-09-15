// process.env['ELASTICSEARCH_LOGS'] = 'http://192.168.71.22:9200';
// process.env['SERVICE_NAME'] = 'pp-be';

import { DukcapilStoreClient } from '../lib/dukcapil-store-client';

const verify = DukcapilStoreClient.store({
    nik: '3173021404941002',
    param: [
        {
            NO_AKTA: '01/384/XVI/08/2020/001',
            DESKRIPSI: 'AKTA KEPEMILIKAN RUKO 300M2',
        },
    ],
})
    .then((s) => console.log(s))
    .catch((e) => console.log(e));
