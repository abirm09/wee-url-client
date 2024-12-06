const envVars = process.env;

const modifiedVars = {
  node_env: envVars.NODE_ENV,
  next_public_core_service_url: envVars.NEXT_PUBLIC_CORE_SERVICE_URL,
};

export const env = modifiedVars;
