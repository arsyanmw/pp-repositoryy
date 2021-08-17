import { IBrowser, IDevice, UAParser, IOS, IEngine, ICPU } from 'ua-parser-js';
import { IncomingHttpHeaders } from 'http';
// eslint-disable-next-line
const ForwardedFor = require('forwarded-for');

interface ClientInformationResultInterface {
    ipAddress: string;
    operatingSystem: string;
    operatingSystemVersion: string;
    browser: string;
    browserVersion: string;
    device: string;
    deviceModel: string;
    deviceVendor: string;
}

class ClientInformation {
    private uAParser: UAParser = new UAParser();
    private forwarded;

    constructor(headers: IncomingHttpHeaders) {
        this.uAParser.setUA(headers['user-agent']);
        this.forwarded = ForwardedFor.forwarded(headers);
    }

    /**
     * getIp
     */
    public getIpClient(): string {
        return this.forwarded.ip;
    }

    /**
     * getBrowser
     */
    public getBrowser(): IBrowser {
        return this.uAParser.getBrowser();
    }

    /**
     * getDevice
     */
    public getDevice(): IDevice {
        return this.uAParser.getDevice();
    }

    /**
     * getOS
     */
    public getOS(): IOS {
        return this.uAParser.getOS();
    }

    /**
     * getEngine
     */
    public getEngine(): IEngine {
        return this.uAParser.getEngine();
    }

    /**
     * getCPU
     */
    public getCPU(): ICPU {
        return this.uAParser.getCPU();
    }

    /**
     * getResult
     */
    public getResult(): ClientInformationResultInterface {
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
    }
}

export { ClientInformation };
