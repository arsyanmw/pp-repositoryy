"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ErrorCode[ErrorCode["SUCCESS"] = 200] = "SUCCESS";
    ErrorCode[ErrorCode["NO_CONTENT"] = 203] = "NO_CONTENT";
    ErrorCode[ErrorCode["FAILED"] = 204] = "FAILED";
    ErrorCode[ErrorCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorCode[ErrorCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ErrorCode[ErrorCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    ErrorCode[ErrorCode["CREATED"] = 201] = "CREATED";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
    ErrorCode[ErrorCode["REDIRECT"] = 303] = "REDIRECT";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
//# sourceMappingURL=global-constant.js.map