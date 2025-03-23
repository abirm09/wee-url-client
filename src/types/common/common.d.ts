import {
  TBillingType,
  TSubscriptionPlan,
  TSubscriptionType,
} from "../SubscriptionPlan/SubscriptionPlan";

type TCommon = {
  selectedBellingPeriod?: TBillingType;
  selectedPlan?: TSubscriptionType;
  paymentIntentId?: string | null;
  subscriptionPlans?: TSubscriptionPlan[];
};

type TCommonSlice = TCommon;

export type { TCommon, TCommonSlice };
