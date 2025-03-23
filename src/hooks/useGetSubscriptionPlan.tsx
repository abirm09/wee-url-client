import UseQuery from "@/lib/ServerSideFetching/UseQuery";
import { TSubscriptionPlan, TSubscriptionType } from "@/types";

const useGetSubscriptionPlan = async ({
  findPlanType,
}: {
  findPlanType?: TSubscriptionType;
}) => {
  const subscriptionPlanData = await UseQuery<TSubscriptionPlan[]>(
    "/subscription-plan",
    { cache: "force-cache", next: { tags: ["subscriptionPlans"] } }
  );

  let specificPlan = undefined;
  if (findPlanType) {
    specificPlan = subscriptionPlanData?.data?.find(
      (item) => item.type === findPlanType
    );
  }

  return { allPlans: subscriptionPlanData.data, specificPlan };
};

export default useGetSubscriptionPlan;
