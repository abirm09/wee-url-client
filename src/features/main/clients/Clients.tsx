"use client";

import { Container } from "@/components";
import { SectionSubTitle, SectionTitle } from "@/components/Shared/Title/Title";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  const clientsArray = new Array(7).fill("");

  return (
    <section>
      <Container className="py-10 md:py-20">
        <SectionTitle text="OUR CLIENTS" />
        <SectionSubTitle text="Take a look at our happy clients" />
        <Marquee gradient={true}>
          <div
            className="flex justify-center items-center gap-14 mt-5"
            data-aos="fade-up"
          >
            {clientsArray.map((_, index) => (
              <Image
                key={index}
                src={`/images/happy_clients/Logo (${index + 1}).png`}
                alt={`Logo ${index + 1}`}
                width={48}
                height={48}
                className="w-auto h-auto"
              />
            ))}
          </div>
        </Marquee>
      </Container>
    </section>
  );
};

export default Clients;
