import Clients from "@/features/main/clients/Clients";
import { About, Banner } from "@/features/main/home/components";
import Security from "@/features/main/home/components/Security";
import Stats from "@/features/main/home/components/Stats";

const page = async () => {
  return (
    <>
      <Banner />
      <Clients />
      <About />
      <Security />
      <Stats />
    </>
  );
};

export default page;
