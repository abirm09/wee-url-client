import { Container } from "@/components";
import {
  CancelAndBack,
  SelectedPlanAndPeriod,
  StripePayment,
} from "@/features/main/subscribe-plan/components";
import UseQuery from "@/lib/ServerSideFetching/UseQuery";
import { TSubscriptionPlan } from "@/types";

const SubscribePlanPage = async () => {
  const subscriptionPlanData = await UseQuery<TSubscriptionPlan[]>(
    "/subscription-plan",
    { cache: "force-cache", next: { tags: ["subscriptionPlans"] } }
  );

  return (
    <section className="mt-0 md:mt-10">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <CancelAndBack />
            <SelectedPlanAndPeriod
              subscriptionPlan={subscriptionPlanData.data}
            />
          </div>
          <StripePayment subscriptionPlan={subscriptionPlanData.data} />
        </div>
      </Container>
    </section>
  );
};

export default SubscribePlanPage;
