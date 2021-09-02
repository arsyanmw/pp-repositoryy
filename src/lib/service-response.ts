import { isEmpty } from 'lodash';
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

class ServiceResponse {
    public pagination = (message: string, data: any = {}, pageSummary: PageSummary) => {
        return {
            code: ErrorCode.SUCCESS,
            message,
            pageSummary,
            data,
        };
    };

    public success = (message: string, data: any = {}) => {
        if (!isEmpty(data)) {
            data = { data: data };
        }
        return {
            code: ErrorCode.SUCCESS,
            message,
            ...data,
        };
    };

    public successWithAdditionalFields = (message: string, data: any = {}, additionalFields: any = {}) => {
        const response = this.success(message, data);
        return {
            ...response,
            ...additionalFields,
        };
    };

    public error = (code: ErrorCode, message: string, data: any = {}) => {
        if (!isEmpty(data)) {
            data = { data: data };
        }

        return {
            code,
            message,
            ...data,
        };
    };
}

export { ServiceResponse, PageSummary, GeneralResponse };
