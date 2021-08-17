"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pt_client_1 = require("../lib/pt-client");
pt_client_1.PtClient.validate('BERASA INDAH LAGI', '')
    .then(function (s) {
    console.log(s);
})
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-pt.js.map