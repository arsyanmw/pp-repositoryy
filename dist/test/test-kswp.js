"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kswp_client_1 = require("../lib/kswp-client");
kswp_client_1.KswpClient.validateNpwpPp('023426265113000', kswp_client_1.enumPpPermissionCode.PP02)
    .then(function (s) {
    console.log(s);
})
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-kswp.js.map