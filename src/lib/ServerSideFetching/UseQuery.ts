import {
  TApiErrorResponseData,
  TApiSuccessResponse,
  TUseQueryPayload,
  TUseQueryResponse,
} from "@/types";
import { env } from "../env";

const UseQuery = async <T = unknown>(
  endpoint: string,
  { cache = "default", next, ...rest }: TUseQueryPayload
): Promise<TUseQueryResponse<T>> => {
  const result: TUseQueryResponse<T> = {
    success: false,
    errorMessages: null,
    message: "",
  };

  try {
    const response = await fetch(
      `${env.next_public_core_service_url}/api/v1${endpoint}`,
      { cache: cache, next, ...rest }
    );
    const data = (await response.json()) as TApiSuccessResponse<T>;
    result.success = true;
    result.data = data.data;
    result.message = data.message;
  } catch (error) {
    const err = error as TApiErrorResponseData;
    result.success = false;
    result.errorMessages = err.errorMessages;
    result.message = err.message;
  }

  return result;
};

export default UseQuery;
