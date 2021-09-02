declare enum ErrorCode {
    UNAUTHORIZED = 401,
    SUCCESS = 200,
    NO_CONTENT = 203,
    FAILED = 204,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    NOT_ACCEPTABLE = 406,
    CREATED = 201,
    INTERNAL_ERROR = 500,
    REDIRECT = 303
}
export { ErrorCode };
