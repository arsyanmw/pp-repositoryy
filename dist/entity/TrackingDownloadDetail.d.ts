import { TrackingDownloadSection } from './TrackingDownloadSection';
import { PpMaster } from './PpMaster';
export declare class TrackingDownloadDetail {
    id: number;
    trackingDownloadSection: TrackingDownloadSection;
    ppMaster: PpMaster;
    transactionNumber: string;
    certificateNumber: string;
    downloadBy: number;
    status: number;
    downloadAt: Date;
}
