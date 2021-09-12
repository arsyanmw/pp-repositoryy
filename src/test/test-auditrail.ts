import { AuditTrail, AuditTrailDataType } from '../';

const audittrail = new AuditTrail();

audittrail
    .commit({
        action: 'login',
        dataType: [AuditTrailDataType.queryDatabase, AuditTrailDataType.information],
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
    .then((r) => console.log(r))
    .catch((e) => console.log(e));

audittrail
    .commit({
        action: 'login',
        dataType: [AuditTrailDataType.queryDatabase, AuditTrailDataType.information],
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
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
