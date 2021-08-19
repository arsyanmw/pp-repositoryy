import { ElasticLibrary } from '../';

const elastic = new ElasticLibrary();

elastic
    .indexOrUpdateProfilePp({
        ppMasterId: 999,
        perseroanName: 'APA AJA ASAL ADA DONK',
        perseroanPhone: 'phone',
        provinceName: 'provinsi',
        cityName: 'city',
        districtName: 'district',
        subDistrictName: 'subdistric',
        transactionQty: 3,
        perseroanAddress: 'FX Mall lt.4, Unit 401. Jl Jendral Sudirman',
        perseroanPostalcode: 10101,
        lastStatus: 2,
        isBlocked: 0,
    })
    .then((e) => {
        console.log(e);
    })
    .catch((e) => console.log(e));

elastic
    .searchProfilePp({
        query: {
            match_all: {},
        },
    })
    .then((r) => console.log('no limit', r));

elastic
    .searchProfilePp({
        from: 0,
        size: 1,
        query: {
            match_all: {},
        },
    })
    .then((r) => console.log('limit', r));

elastic
    .searchProfilePp({
        from: 0,
        size: 1,
        query: {
            match: {
                perseroan_name: {
                    query: 'INDAH',
                    operator: 'and',
                },
            },
        },
    })
    .then((r) => console.log('query match', r));
