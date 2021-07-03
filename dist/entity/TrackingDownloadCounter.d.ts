import { TrackingDownloadSection } from './TrackingDownloadSection';
import { PpMaster } from './PpMaster';
export declare class TrackingDownloadCounter {
    id: number;
    trackingDownloadSection: TrackingDownloadSection;
    ppMaster: PpMaster;
    transactionNumber: string;
    certificateNumber: string;
    downloadCount: number;
    status: number;
}
