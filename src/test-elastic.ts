import { ElasticLibrary } from './lib/elastic-search';

const elastic = new ElasticLibrary();

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
