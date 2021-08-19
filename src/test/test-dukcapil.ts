import { DukcapilClient } from '../lib/dukcapil-client';

const verify = DukcapilClient.nikVerifByElement({
    nik: '3173044607870002',
    fullName: 'iyulianti',
    threshold: '80',
    birthDate: new Date('07-06-1990'),
})
    .then((s) => console.log(s.data.content))
    .catch((e) => console.log(e));
