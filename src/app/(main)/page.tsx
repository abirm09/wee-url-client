import Clients from "@/features/main/clients/Clients";
import { About, Banner } from "@/features/main/home/components";
import Security from "@/features/main/home/components/Security";

const page = async () => {
  return (
    <>
      <Banner />
      <Clients />
      <About />
      <Security />
    </>
  );
};

export default page;
