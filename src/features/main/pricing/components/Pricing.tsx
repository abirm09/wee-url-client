import { Container } from "@/components";
import { SectionTitle } from "@/components/Shared/Title/Title";
import { billingType } from "@/const";
import UseQuery from "@/lib/ServerSideFetching/UseQuery";
import { TSubscriptionPlan } from "@/types";
import PricingCard from "./Card/PricingCard";
import PricingTabsContent from "./PricingTabsContent";

const Pricing = async () => {
  const subscriptionPlanData = await UseQuery<TSubscriptionPlan[]>(
    "/subscription-plan",
    { cache: "force-cache", next: { tags: ["subscriptionPlans"] } }
  );

  const subscriptionPlans = subscriptionPlanData?.data || [];

  return (
    <section>
      <Container className="py-10 md:py-20 space-y-3">
        <SectionTitle text="Pricing" />
        <p
          className="text-gray-600 text-center text-xs md:text-base"
          data-aos="fade-up"
        >
          Choose your desired subscription plan.
        </p>

        <PricingTabsContent billingType={billingType} />

        <div className="flex flex-wrap gap-3 justify-center">
          {subscriptionPlans.map((item) => (
            <PricingCard key={item.id} plan={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
