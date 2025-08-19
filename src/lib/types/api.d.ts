declare interface ErrorResponse {
  message: string;
  code:number;
}

declare type SuccessResponse<T> =  {
  message: string;
}& T

 type ApiResponse<T> = SuccessResponse<T> | ErrorResponse