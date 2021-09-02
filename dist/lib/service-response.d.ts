import { ErrorCode } from './global-constant';
interface PageSummary {
    page: number;
    limit: number;
    totalCount: number;
}
interface GeneralResponse {
    code: number;
    message: string;
    data?: any;
}
declare class ServiceResponse {
    pagination: (message: string, data: any, pageSummary: PageSummary) => {
        code: ErrorCode;
        message: string;
        pageSummary: PageSummary;
        data: any;
    };
    success: (message: string, data?: any) => any;
    successWithAdditionalFields: (message: string, data?: any, additionalFields?: any) => any;
    error: (code: ErrorCode, message: string, data?: any) => any;
}
export { ServiceResponse, PageSummary, GeneralResponse };
