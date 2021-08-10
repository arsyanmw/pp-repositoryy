"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFormatter = void 0;
var PlatformTools_1 = require("typeorm/platform/PlatformTools");
var TextFormatter = /** @class */ (function () {
    function TextFormatter(highlightEnabled) {
        if (highlightEnabled === void 0) { highlightEnabled = false; }
        this.highlightEnabled = highlightEnabled;
    }
    TextFormatter.prototype.formatQuery = function (query, parameters) {
        var q = this.formatQueryWithParameter(query, parameters);
        return "query: " + q;
    };
    TextFormatter.prototype.formatQueryError = function (error, query, parameters) {
        var q = this.formatQueryWithParameter(query, parameters);
        return "query failed: " + q;
    };
    TextFormatter.prototype.formatQuerySlow = function (time, query, parameters) {
        var q = this.formatQueryWithParameter(query, parameters);
        return "query is slow: execution time = " + time + ", query = " + q;
    };
    TextFormatter.prototype.formatQueryWithParameter = function (query, parameters) {
        var result = parameters && parameters.length ? query + " -- PARAMETERS: " + JSON.stringify(parameters) : query;
        return this.highlightEnabled ? PlatformTools_1.PlatformTools.highlightSql(result) : result;
    };
    return TextFormatter;
}());
exports.TextFormatter = TextFormatter;
//# sourceMappingURL=TextFormatter.js.map