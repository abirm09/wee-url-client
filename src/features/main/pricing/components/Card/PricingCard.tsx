import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenuSeparator,
} from "@/components";
import { TSubscriptionPlan } from "@/types";
import CardPriceContent from "./CardPriceContent";
import CardSelectPlan from "./CardSelectPlan";
import PlanFeatureContent from "./PlanFeatureContent";

const PricingCard = ({ plan }: { plan: TSubscriptionPlan }) => {
  return (
    <div className="w-[310px] group">
      <Card
        className={`border-t-2 ${plan.type === "free" ? "" : "border-t-primary"}`}
      >
        <CardHeader className="space-y-4">
          <CardTitle className="group-hover:text-primary">
            {plan.name}
          </CardTitle>
          <CardDescription>
            <CardPriceContent billingPeriods={plan?.billingPeriods} />
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <DropdownMenuSeparator className="bg-gray-300" />
          <ul className="space-y-2">
            <PlanFeatureContent
              checked={true}
              text={`${plan.maxURLsAllowed ? `Max URL ${plan.maxURLsAllowed}/Month` : "Unlimited"}`}
            />
            <PlanFeatureContent checked={!plan.showAds} text={`Hide ads`} />
            <PlanFeatureContent
              checked={plan.canSetExpiration}
              text={`Set expiration`}
            />
            <PlanFeatureContent
              checked={plan.allowURLEditing}
              text={`URL editing`}
            />
            <PlanFeatureContent
              checked={plan.canSetExpiration}
              text={`Set expiration`}
            />
            <PlanFeatureContent checked={plan.QRCode} text={`Create QR code`} />
            <PlanFeatureContent
              checked={plan.analyticsAccess}
              text={`Analytics access`}
            />
            <PlanFeatureContent
              checked={plan.geoTargetingEnabled}
              text={`GEO targeting`}
            />
            <PlanFeatureContent checked={plan.APIAccess} text={`API access`} />
            <PlanFeatureContent
              checked={plan.bulkURLShortening}
              text={`Bulk URL shortening`}
            />
            <PlanFeatureContent
              checked={plan.customDomainAllowed}
              text={`Custom domain allowed`}
            />
            <PlanFeatureContent
              checked={plan.brandingCustomization}
              text={`Branding customization`}
            />
            <PlanFeatureContent
              checked={plan.linkRotation}
              text={`Link rotation`}
            />
            <PlanFeatureContent
              checked={plan.canSetPassword}
              text={`Can set password`}
            />
          </ul>
        </CardContent>
        <CardFooter>
          <CardSelectPlan planType={plan.type} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCard;
