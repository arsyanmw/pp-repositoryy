import { PtClient } from '../lib/pt-client';

PtClient.validate('BERASA INDAH LAGI', '')
    .then((s) => {
        console.log(s);
    })
    .catch((e) => console.log(e));
