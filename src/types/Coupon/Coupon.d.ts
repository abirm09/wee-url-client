import {
  TSubscriptionRequest,
  TSubscriptionType,
} from "../SubscriptionPlan/SubscriptionPlan";

type TCoupon = {
  id?: string;
  code?: string;
  description?: string;
  discountAmount?: number;
  discountPercent?: number;
  isActive?: boolean;
  maxRedemptions?: number;
  currentRedemptions?: number;
  expiryDate?: string;
  allowedSubscriptions?: TSubscriptionType[];
  subscriptionRequests?: TSubscriptionRequest[];
  createdAt?: string;
  updatedAt?: string;
};

export type { TCoupon };
