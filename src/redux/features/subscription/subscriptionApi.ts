import baseApi from "@/redux/baseApi";

const subscriptionPlan = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubscriptionReq: builder.mutation({
      query: (body) => ({
        url: "/subscription/create-subscription-request",
        method: "POST",
        body,
      }),
    }),
    createStripePaymentIntent: builder.mutation({
      query: (body) => ({
        url: "/subscription/stripe-payment-intent",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useCreateSubscriptionReqMutation,
  useCreateStripePaymentIntentMutation,
} = subscriptionPlan;
