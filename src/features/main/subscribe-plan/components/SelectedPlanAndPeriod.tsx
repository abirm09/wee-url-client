"use client";

import { Label, RadioGroup, RadioGroupItem } from "@/components";
import { billingType, subscriptionType } from "@/const";
import { setCommon } from "@/redux/features/common/commonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TBillingType, TSubscriptionPlan, TSubscriptionType } from "@/types";
import { useEffect, useState } from "react";

const SelectedPlanAndPeriod = ({
  subscriptionPlan,
}: {
  subscriptionPlan?: TSubscriptionPlan[];
}) => {
  const dispatch = useAppDispatch();
  const { selectedBellingPeriod, selectedPlan } = useAppSelector(
    ({ common }) => common
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const monthlyCost =
      subscriptionPlan
        ?.find((item) => item.type === selectedPlan)
        ?.billingPeriods?.find(
          (item) => item.periodType === selectedBellingPeriod
        )?.price || 0;

    const total = (() => {
      if (selectedBellingPeriod === "monthly") {
        return monthlyCost * 1;
      } else if (selectedBellingPeriod === "sixMonth") {
        return monthlyCost * 6;
      } else if (selectedBellingPeriod === "yearly") {
        return monthlyCost * 12;
      } else {
        return 0;
      }
    })();

    setTotal(Number(total.toFixed(2)));
  }, [selectedBellingPeriod, selectedPlan]);

  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <p>
          <span>Total: </span>
          <span className="font-bold text-2xl">{total}/=</span>
        </p>
      </div>
      <div>
        <h4 className="font-bold">Subscription plan</h4>
        <div className="ps-5">
          <RadioGroup
            defaultValue={selectedPlan}
            onValueChange={(v: TSubscriptionType) =>
              dispatch(setCommon({ selectedPlan: v }))
            }
          >
            {subscriptionType.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <RadioGroupItem value={item} id={`sp-${item}`} />
                <Label htmlFor={`sp-${item}`} className="cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="font-bold">Subscription period</h4>
        <div className="ps-5">
          <RadioGroup
            defaultValue={selectedBellingPeriod}
            onValueChange={(e: TBillingType) =>
              dispatch(setCommon({ selectedBellingPeriod: e }))
            }
          >
            {billingType.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <RadioGroupItem value={item} id={`spr-${item}`} />
                <Label htmlFor={`spr-${item}`} className="cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlanAndPeriod;
