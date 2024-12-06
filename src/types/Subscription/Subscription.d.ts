import {
  TSubscriptionPlan,
  TSubscriptionRequest,
} from "../SubscriptionPlan/SubscriptionPlan";
import { TUser } from "../User/user";

type TSubscription = {
  id?: string;
  userId?: string;
  planId?: string;
  reqId?: string;
  paymentId?: string;
  startedAt?: string;
  expiresAt?: string;
  isActive?: boolean;
  isAutoRenew?: boolean;
  user?: TUser;
  plan?: TSubscriptionPlan;
  request?: TSubscriptionRequest;
  createdAt?: string;
  updatedAt?: string;
};

export type { TSubscription };
