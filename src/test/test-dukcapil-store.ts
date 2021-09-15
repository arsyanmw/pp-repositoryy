// process.env['ELASTICSEARCH_LOGS'] = 'http://192.168.71.22:9200';
// process.env['SERVICE_NAME'] = 'pp-be';

import { DukcapilStoreClient } from '../lib/dukcapil-store-client';

const verify = DukcapilStoreClient.store({
    nik: '3173021404941002',
    param: [
        {
            nomor_sertifikat: 'AHU-000142.AH.01.30.Tahun 2021',
        },
    ],
})
    .then((s) => console.log(s))
    .catch((e) => console.log(e));
