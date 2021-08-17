"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInformation = void 0;
var ua_parser_js_1 = require("ua-parser-js");
var lodash_1 = require("lodash");
// eslint-disable-next-line
var ForwardedFor = require('forwarded-for');
var ClientInformation = /** @class */ (function () {
    function ClientInformation(headers) {
        this.uAParser = new ua_parser_js_1.UAParser();
        this.uAParser.setUA(headers['user-agent']);
        this.forwarded = ForwardedFor.forwarded(headers);
    }
    /**
     * getIp
     */
    ClientInformation.prototype.getIpClient = function () {
        return lodash_1.get(this.forwarded, 'ip', '127.0.0.1');
    };
    /**
     * getBrowser
     */
    ClientInformation.prototype.getBrowser = function () {
        return this.uAParser.getBrowser();
    };
    /**
     * getDevice
     */
    ClientInformation.prototype.getDevice = function () {
        return this.uAParser.getDevice();
    };
    /**
     * getOS
     */
    ClientInformation.prototype.getOS = function () {
        return this.uAParser.getOS();
    };
    /**
     * getEngine
     */
    ClientInformation.prototype.getEngine = function () {
        return this.uAParser.getEngine();
    };
    /**
     * getCPU
     */
    ClientInformation.prototype.getCPU = function () {
        return this.uAParser.getCPU();
    };
    /**
     * getResult
     */
    ClientInformation.prototype.getResult = function () {
        return {
            ipAddress: this.getIpClient(),
            operatingSystem: this.getOS().name || '-',
            operatingSystemVersion: this.getOS().version || '-',
            browser: this.getBrowser().name || '-',
            browserVersion: this.getBrowser().version || '-',
            device: this.getDevice().type || '-',
            deviceModel: this.getDevice().model || '-',
            deviceVendor: this.getDevice().vendor || '-',
        };
    };
    return ClientInformation;
}());
exports.ClientInformation = ClientInformation;
//# sourceMappingURL=client-information.js.map