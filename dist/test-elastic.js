"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elastic_search_1 = require("./lib/elastic-search");
var elastic = new elastic_search_1.ElasticLibrary();
elastic
    .searchProfilePp({
    query: {
        match_all: {},
    },
})
    .then(function (r) { return console.log('no limit', r); });
elastic
    .searchProfilePp({
    from: 0,
    size: 1,
    query: {
        match_all: {},
    },
})
    .then(function (r) { return console.log('limit', r); });
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
    .then(function (r) { return console.log('query match', r); });
//# sourceMappingURL=test-elastic.js.map