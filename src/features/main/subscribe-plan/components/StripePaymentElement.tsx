"use client";

import { WeeButton } from "@/components";
import {
  useCreateStripePaymentIntentMutation,
  useCreateSubscriptionReqMutation,
} from "@/redux/features/subscription/subscriptionApi";
import { useAppSelector } from "@/redux/hooks";
import {
  TApiErrorResponse,
  TApiSuccessResponse,
  TSubscriptionPlan,
} from "@/types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CardInfoCopy from "./CardInfoCopy";

const StripePaymentElement = ({
  subscriptionPlan,
}: {
  subscriptionPlan?: TSubscriptionPlan[];
}) => {
  const [loading, setLoading] = useState(false);
  const { selectedBellingPeriod, selectedPlan } = useAppSelector(
    ({ common }) => common
  );
  const stripe = useStripe();
  const elements = useElements();
  const [createSubReq] = useCreateSubscriptionReqMutation();
  const [createPaymentIntent] = useCreateStripePaymentIntentMutation();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error("Failed to create payment method.");
      return;
    }

    let subscriptionRequest = {};

    try {
      const selectedSubscriptionPlan = subscriptionPlan?.find(
        (item) => item.type === selectedPlan
      );

      const selectedBellingPeriodData =
        selectedSubscriptionPlan?.billingPeriods?.find(
          (item) => item.periodType === selectedBellingPeriod
        );

      const res = (await createSubReq({
        planId: selectedSubscriptionPlan?.id,
        billingPeriodId: selectedBellingPeriodData?.id,
      }).unwrap()) as TApiSuccessResponse<{ requestId: string }>;
      subscriptionRequest = res?.data;
    } catch (err) {
      const error = err as TApiErrorResponse;
      toast.error(error?.data?.message);
      setLoading(false);
      return;
    }

    let paymentIntentData: {
      client_secret: string;
    } = { client_secret: "" };

    try {
      const res = (await createPaymentIntent(
        subscriptionRequest
      ).unwrap()) as TApiSuccessResponse<{ client_secret: string }>;
      paymentIntentData = res.data;
    } catch (err) {
      const error = err as TApiErrorResponse;
      toast.error(error?.data?.message);
      setLoading(false);
      return;
    }

    try {
      const { paymentIntent, error: confirmErr } =
        await stripe.confirmCardPayment(paymentIntentData.client_secret, {
          payment_method: {
            card,
            billing_details: {
              // name: user?.displayName || "Unknown",
              // email: user?.email || "Anonymous",
            },
          },
        });

      if (paymentIntent?.status === "succeeded") {
        toast.success("Subscription success");
      }

      if (confirmErr?.message) {
        toast.error(confirmErr?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div className="w-full border border-gray-200 p-3 rounded-md">
      <h4 className="pb-5 font-semibold">Payment</h4>
      {selectedPlan === "free" ? (
        <div>
          <h4 className="text-center">Please select a paid plan</h4>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <WeeButton className="w-full" loading={loading}>
              Pay now
            </WeeButton>
          </form>
        </>
      )}
      <Toaster />
      <div className="mt-5">
        <h3 className="text-center font-semibold py-2">
          Please use the card information below to make the purchase.
        </h3>
        <ul>
          <li>
            <span>Card number: </span>
            <span>4242 4242 4242 4242</span>
            <span>
              <CardInfoCopy value="4242 4242 4242 4242" />
            </span>
          </li>
          <li>
            <span>Expiration date: </span>
            <span>
              09/{(new Date().getFullYear() + 1).toString().slice(2, 4)}
            </span>
            <span>
              <CardInfoCopy
                value={`09/${(new Date().getFullYear() + 1).toString().slice(2, 4)}`}
              />
            </span>
          </li>
          <li>
            <span>CVC/CVV: </span>
            <span>123</span>
            <span>
              <CardInfoCopy value="123" />
            </span>
          </li>
          <li>
            <span>Post code: </span>
            <span>12345</span>
            <span>
              <CardInfoCopy value="12345" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StripePaymentElement;
