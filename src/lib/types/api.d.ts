declare interface ErrorResponse {
  message: string;
  code: number;
}

declare type SuccessResponse<T> = {
  message: string;
} & T;

declare interface VerifyCodeSuccessResponse {
  status: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
type VerifyCodeResponse = VerifyCodeSuccessResponse | ErrorResponse;
