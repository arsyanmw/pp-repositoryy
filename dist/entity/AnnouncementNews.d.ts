import { BaseUserLog } from './BaseUserLog';
export declare class AnnouncementNews extends BaseUserLog {
    id: number;
    title: string;
    description: string;
    imageValueJson: string;
    startedAt: Date;
    expiredAt: Date;
}
