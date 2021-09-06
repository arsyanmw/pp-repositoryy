"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
var lodash_1 = require("lodash");
var global_constant_1 = require("./global-constant");
var ServiceResponse = /** @class */ (function () {
    function ServiceResponse() {
        var _this = this;
        this.pagination = function (message, data, pageSummary) {
            if (data === void 0) { data = {}; }
            return {
                code: global_constant_1.ErrorCode.SUCCESS,
                message: message,
                pageSummary: pageSummary,
                data: data,
            };
        };
        this.success = function (message, data) {
            if (data === void 0) { data = {}; }
            if (!lodash_1.isEmpty(data)) {
                data = { data: data };
            }
            return __assign({ code: global_constant_1.ErrorCode.SUCCESS, message: message }, data);
        };
        this.successWithAdditionalFields = function (message, data, additionalFields) {
            if (data === void 0) { data = {}; }
            if (additionalFields === void 0) { additionalFields = {}; }
            var response = _this.success(message, data);
            return __assign(__assign({}, response), additionalFields);
        };
        this.error = function (code, message, data) {
            if (data === void 0) { data = {}; }
            if (!lodash_1.isEmpty(data)) {
                data = { data: data };
            }
            return __assign({ code: code,
                message: message }, data);
        };
    }
    return ServiceResponse;
}());
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=service-response.js.map