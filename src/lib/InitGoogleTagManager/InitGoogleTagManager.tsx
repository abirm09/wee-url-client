import { GoogleTagManager } from "@next/third-parties/google";
import { env } from "../env";

const InitGoogleTagManager = () => {
  if (!env.google_tag) {
    return null;
  }
  return (
    <>
      <GoogleTagManager gtmId={`${env.google_tag}`} />
    </>
  );
};

export default InitGoogleTagManager;
