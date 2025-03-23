import Clients from "@/features/main/clients/Clients";
import { About, Banner } from "@/features/main/home/components";
import { Pricing } from "@/features/main/pricing/components";

const page = async () => {
  return (
    <>
      <Banner />
      <Clients />
      <About />
      <Pricing />
    </>
  );
};

export default page;
