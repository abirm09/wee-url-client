import Clients from "@/features/main/clients/Clients";
import { About, Banner } from "@/features/main/home/components";
import SecurePayments from "@/features/main/home/components/SecurePayments";
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
      <SecurePayments />
    </>
  );
};

export default page;
