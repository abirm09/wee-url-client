import { TCoupon } from "../Coupon/Coupon";
import { TSubscription } from "../Subscription/Subscription";
import { TUser } from "../User/user";

type TSubscriptionType = "free" | "starter" | "premium" | "business";

type TBillingType = "monthly" | "sixMonth" | "yearly";

type TSubscriptionRequestStatus =
  | "pending"
  | "completed"
  | "expired"
  | "canceled";

type TSubscriptionRequest = {
  id: string;
  userId: string;
  planId: string;
  billingPeriodId: string;
  status: TSubscriptionRequestStatus;
  couponId?: string;
  userNewCreditRemarks?: string;
  originalCost: number;
  discountAmount?: number;
  usedUserCredit?: number;
  remainingUserCredit?: number;
  remainingPayableAmount?: number;
  finalCost: number;
  stripeIntentId?: string;
  user: TUser;
  plan: TSubscriptionPlan;
  billingPeriod: TBillingPeriod;
  coupon?: TCoupon;
  subscription?: TSubscription;
  createdAt: Date;
  updatedAt: Date;
};

type TBillingPeriod = {
  id: string;
  planId: string;
  plan: TSubscriptionPlan;
  periodType: TBillingType;
  price?: number;
  createdAt: string;
  updatedAt: string;
  subscriptionRequests: TSubscriptionRequest[];
};

type TSubscriptionPlan = {
  id: string;
  name: string;
  type: TSubscriptionType;
  description?: string;
  maxURLsAllowed?: number;
  customURLSlug: boolean;
  APIAccess: boolean;
  bulkURLShortening: boolean;
  customURLRedirectRules: boolean;
  canSetExpiration: boolean;
  allowURLEditing: boolean;
  showAds: boolean;
  QRCode: boolean;
  customDomainAllowed: boolean;
  analyticsAccess: boolean;
  prioritySupport: boolean;
  brandingCustomization: boolean;
  geoTargetingEnabled: boolean;
  linkRotation: boolean;
  canSetPassword: boolean;
  isPublic: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  subscriptions: TSubscription[];
};

export type {
  TBillingPeriod,
  TBillingPeriod,
  TBillingType,
  TSubscriptionPlan,
  TSubscriptionRequest,
  TSubscriptionType,
};
