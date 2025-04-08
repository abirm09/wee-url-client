import { TMeta } from "../Meta/Meta";

type TApiSuccessResponse<D = unknown> = {
  success: true;
  statusCode: string;
  message: string;
  meta?: TMeta;
  data: D;
};

type TApiErrorMessage = {
  path: string;
  message: string;
};

type TApiErrorResponseData = {
  success: false;
  message: string;
  errorMessages: TApiErrorMessage[];
};

type TApiErrorResponse = {
  status: number;
  data: TApiErrorResponseData;
};

export type {
  TApiErrorMessage,
  TApiErrorResponse,
  TApiErrorResponseData,
  TApiSuccessResponse,
};
