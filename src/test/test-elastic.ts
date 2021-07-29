import { ElasticLibrary } from '../';

const elastic = new ElasticLibrary();

elastic
    .indexOrUpdateProfilePp({
        ppMasterId: 998,
        perseroanAddress: 'bisa',
        districtName: 'test',
        cityName: 'city',
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
