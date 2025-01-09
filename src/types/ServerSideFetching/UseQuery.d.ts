import { TApiErrorMessage } from "../Response/Response";

type TCacheTags = "subscriptionPlans";

type TUseQueryPayload = {
  cache?:
    | "default"
    | "force-cache"
    | "no-cache"
    | "no-store"
    | "only-if-cached"
    | "reload";
  next?: { tags?: TCacheTags[]; revalidate?: number | false };
  [key: string]: unknown;
};

type TUseQueryResponse<T = unknown> = {
  success: boolean;
  errorMessages: TApiErrorMessage[] | null;
  message: string;
  data?: T;
};

export type { TUseQueryPayload, TUseQueryResponse };
