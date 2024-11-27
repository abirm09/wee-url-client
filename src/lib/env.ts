const envVars = process.env;

const modifiedVars = {
  node_env: envVars.NODE_ENV,
  next_public_base_api_url: envVars.NEXT_PUBLIC_BASE_API_URL,
};

export const env = modifiedVars;
