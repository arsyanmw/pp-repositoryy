import { SimpadhuClient } from '../lib/simpadhu-client';

SimpadhuClient.validate({
    idProduk: 40,
    tipeTransaksi: 60,
    idMapping: 2,
    voucher: '100000000001',
})
    .then((s) => {
        // console.log(s);
    })
    .catch((e) => console.log(e));
