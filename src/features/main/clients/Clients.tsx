import { Container } from "@/components";
import { SectionSubTitle, SectionTitle } from "@/components/Shared/Title/Title";
import Image from "next/image";

const Clients = () => {
  const clientsArray = new Array(7).fill("");

  return (
    <section>
      <Container className="py-10 md:py-20">
        <SectionTitle text="OUR CLIENTS" />
        <SectionSubTitle text="Take a look at our happy clients" />
        <div className="flex justify-center items-center gap-10 mt-5">
          {clientsArray.map((_, index) => (
            <Image
              key={index}
              src={`/images/happy_clients/Logo (${index + 1}).png`}
              alt={`Logo ${index + 1}`}
              width={48}
              height={48}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Clients;
