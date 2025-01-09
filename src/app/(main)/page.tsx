import { About, Banner } from "@/features/main/home/components";
import { Pricing } from "@/features/main/pricing/components";

const page = async () => {
  return (
    <>
      <Banner />
      <About />
      <Pricing />
    </>
  );
};

export default page;
