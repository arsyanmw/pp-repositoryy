"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simpadhu_client_1 = require("../lib/simpadhu-client");
simpadhu_client_1.SimpadhuClient.validate({
    idProduk: 40,
    tipeTransaksi: 60,
    idMapping: 2,
    voucher: '100000000001',
})
    .then(function (s) {
    // console.log(s);
})
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-simpadu.js.map