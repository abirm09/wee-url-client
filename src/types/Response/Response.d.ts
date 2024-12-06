type TApiSuccessResponse<D = null> = {
  success: true;
  statusCode: string;
  message: string;
  data: D;
};

type TApiErrorMessage = {
  path: string;
  message: string;
};

type TApiErrorResponse = {
  status: number;
  data: {
    success: false;
    message: string;
    errorMessages: TApiErrorMessage[];
  };
};

export type { TApiErrorMessage, TApiErrorResponse, TApiSuccessResponse };
