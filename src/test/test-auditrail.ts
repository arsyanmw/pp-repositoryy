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
            arrayNih: [
                {
                    id: 2,
                    email: 'emailaj2@mail.com',
                    fullName: 'nama penuh aja',
                    nik: '12317123768124',
                },
            ],
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

audittrail
    .email({
        subject: 'ini subject email',
        sendTo: 'oke@mail.com',
    })
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
