import {
  TBillingType,
  TSubscriptionType,
} from "../SubscriptionPlan/SubscriptionPlan";

type TCommon = {
  selectedBellingPeriod?: TBillingType;
  selectedPlan?: TSubscriptionType;
};

type TCommonSlice = TCommon;

export type { TCommon, TCommonSlice };
