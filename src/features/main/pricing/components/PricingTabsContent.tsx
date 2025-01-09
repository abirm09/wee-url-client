"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { setCommon } from "@/redux/features/common/commonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TBillingType } from "@/types";

const PricingTabsContent = ({
  billingType,
}: {
  billingType: TBillingType[];
}) => {
  const { selectedBellingPeriod } = useAppSelector(({ common }) => common);
  const dispatch = useAppDispatch();

  const handleAddSearchParams = (param: TBillingType) => {
    dispatch(setCommon({ selectedBellingPeriod: param }));
  };

  return (
    <div className="flex justify-center pt-10">
      <Tabs defaultValue={selectedBellingPeriod}>
        <TabsList>
          {billingType.map((item) => (
            <TabsTrigger
              onClick={() => handleAddSearchParams(item)}
              key={item}
              value={item}
              className="capitalize"
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="monthly" className="hidden"></TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingTabsContent;
