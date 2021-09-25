"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var audittrail = new __1.AuditTrail();
audittrail
    .commit({
    action: 'login',
    dataType: [__1.AuditTrailDataType.queryDatabase, __1.AuditTrailDataType.information],
    clientInformation: {
        browser: '-',
        browserVersion: '-',
        device: '-',
        deviceModel: '-',
        deviceVendor: '-',
        ipAddress: '127.0.0.1',
        operatingSystem: '-',
        operatingSystemVersion: '',
    },
    userInformation: {
        id: 1,
        email: 'emailaj@mail.com',
        fullName: 'nama penuh',
        nik: '12317123768123',
        token: 'token',
    },
    data: {
        id: 1,
        email: 'emailaj@mail.com',
        fullName: 'nama penuh',
        nik: '12317123768123',
    },
})
    .then(function (r) { return console.log(r); })
    .catch(function (e) { return console.log(e); });
audittrail
    .commit({
    action: 'login',
    dataType: [__1.AuditTrailDataType.queryDatabase, __1.AuditTrailDataType.information],
    source: 'tiban source',
    clientInformation: {
        browser: '-',
        browserVersion: '-',
        device: '-',
        deviceModel: '-',
        deviceVendor: '-',
        ipAddress: '127.0.0.1',
        operatingSystem: '-',
        operatingSystemVersion: '',
    },
    userInformation: {
        id: 1,
        email: 'emailaj@mail.com',
        fullName: 'nama penuh',
        nik: '12317123768123',
        token: 'token',
    },
    data: {
        id: 1,
        email: 'emailaj@mail.com',
        fullName: 'nama penuh',
        nik: '12317123768123',
    },
})
    .then(function (r) { return console.log(r); })
    .catch(function (e) { return console.log(e); });
audittrail
    .email({
    subject: 'ini subject email',
    sendTo: 'oke@mail.com',
})
    .then(function (r) { return console.log(r); })
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test-auditrail.js.map