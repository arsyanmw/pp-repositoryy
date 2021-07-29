"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var elastic = new __1.ElasticLibrary();
elastic
    .indexOrUpdateProfilePp({
    ppMasterId: 998,
    perseroanAddress: 'bisa',
    districtName: 'test',
    cityName: 'city',
})
    .then(function (e) {
    console.log(e);
})
    .catch(function (e) { return console.log(e); });
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