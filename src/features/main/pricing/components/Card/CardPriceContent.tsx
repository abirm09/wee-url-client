"use client";

import { useAppSelector } from "@/redux/hooks";
import { TBillingPeriod } from "@/types";

const CardPriceContent = ({
  billingPeriods,
}: {
  billingPeriods: TBillingPeriod[];
}) => {
  const { selectedBellingPeriod } = useAppSelector(({ common }) => common);
  return (
    <>
      <span className="text-3xl font-semibold text-gray-800">
        &#36;{" "}
        {billingPeriods.find(
          (item) => item.periodType === selectedBellingPeriod
        )?.price || 0}
      </span>{" "}
      /Month
    </>
  );
};

export default CardPriceContent;
