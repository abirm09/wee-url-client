const modifiedVars = {
  node_env: process.env.NODE_ENV,
  next_public_core_service_url: process.env.NEXT_PUBLIC_CORE_SERVICE_URL,
  next_public_stripe_publishable_key:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  google_tag: process.env.GOOGLE_TAG,
};

export const env = modifiedVars;
