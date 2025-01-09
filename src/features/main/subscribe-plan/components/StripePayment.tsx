"use client";

import { env } from "@/lib";
import { TSubscriptionPlan } from "@/types";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentElement from "./StripePaymentElement";

const StripePayment = ({
  subscriptionPlan,
}: {
  subscriptionPlan?: TSubscriptionPlan[];
}) => {
  const stripePromise = loadStripe(env.next_public_stripe_publishable_key);
  return (
    <div className="flex justify-center">
      <Elements stripe={stripePromise}>
        <StripePaymentElement subscriptionPlan={subscriptionPlan} />
      </Elements>
    </div>
  );
};

export default StripePayment;
