"use client";
import { WeeButton } from "@/components";
import { setCommon } from "@/redux/features/common/commonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TSubscriptionType } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CardSelectPlan = ({ planType }: { planType: TSubscriptionType }) => {
  const router = useRouter();
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const handlePlanSelect = () => {
    dispatch(setCommon({ selectedPlan: planType }));
    if (!user) {
      router.push("/auth/login?redirect_path=/subscribe-plan");
      return;
    }
    router.push("/subscribe-plan");
  };

  return (
    <div className="w-full">
      <WeeButton
        className={`w-full rounded-full`}
        disabled={planType === "free"}
        onClick={handlePlanSelect}
      >
        Select plan <ArrowRight />
      </WeeButton>
    </div>
  );
};

export default CardSelectPlan;
