"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticSearchConnection = void 0;
var elasticsearch_1 = require("@elastic/elasticsearch");
var ELASTICSEARCH_APPS = process.env.ELASTICSEARCH_APPS;
exports.ElasticSearchConnection = new elasticsearch_1.Client({
    node: ELASTICSEARCH_APPS,
});
//# sourceMappingURL=elastic-search.js.map