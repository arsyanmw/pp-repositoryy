import { DjpClient } from '../lib/djp-client';

// new test case
DjpClient.validateNpwp('373044607870001')
    .then((s) => {
        console.log(s);

        // old test case
        DjpClient.validateNpwp('500000000098865')
            .then((s) => console.log(s))
            .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
