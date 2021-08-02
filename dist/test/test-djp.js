"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var djp_client_1 = require("../lib/djp-client");
// new test case
djp_client_1.DjpClient.validateNpwp('373044607870001')
    .then(function (s) {
    console.log(s);
    // old test case
    djp_client_1.DjpClient.validateNpwp('500000000098865')
        .then(function (s) { return console.log(s); })
        .catch(function (e) { return console.log(e); });
})
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-djp.js.map