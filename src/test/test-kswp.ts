import { KswpClient, enumPpPermissionCode } from '../lib/kswp-client';

KswpClient.validateNpwpPp('023426265113000', enumPpPermissionCode.PP02)
    .then((s) => {
        console.log(s);
    })
    .catch((e) => console.log(e));
