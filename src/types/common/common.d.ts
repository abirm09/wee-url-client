import {
  TBillingType,
  TSubscriptionType,
} from "../SubscriptionPlan/SubscriptionPlan";

type TCommon = {
  selectedBellingPeriod?: TBillingType;
  selectedPlan?: TSubscriptionType;
  paymentIntentId?: string | null;
};

type TCommonSlice = TCommon;

export type { TCommon, TCommonSlice };
