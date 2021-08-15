/// <reference types="node" />
import { IBrowser, IDevice, IOS, IEngine, ICPU } from 'ua-parser-js';
import { IncomingHttpHeaders } from 'http';
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
declare class ClientInformation {
    private uAParser;
    private forwarded;
    constructor(headers: IncomingHttpHeaders);
    /**
     * getIp
     */
    getIpClient(): string;
    /**
     * getBrowser
     */
    getBrowser(): IBrowser;
    /**
     * getDevice
     */
    getDevice(): IDevice;
    /**
     * getOS
     */
    getOS(): IOS;
    /**
     * getEngine
     */
    getEngine(): IEngine;
    /**
     * getCPU
     */
    getCPU(): ICPU;
    /**
     * getResult
     */
    getResult(): ClientInformationResultInterface;
}
export { ClientInformation };
