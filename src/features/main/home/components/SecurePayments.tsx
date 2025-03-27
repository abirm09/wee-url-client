"use client";

import PaymentIco from "@/assets/images/others/card-payments.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Container,
  WeeButton,
} from "@/components";
import { useState } from "react";

const SecurePayments = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h4 className="text-2xl lg:text-3xl font-semibold">
              100% safe and secure payments. We don&apos;t save your payment
              information.
            </h4>

            {/*  */}

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2 text-gray-600"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quaerat deserunt laborum ut dolorem obcaecati beatae,
                repudiandae iure maiores perferendis eius illum vel! Sed eum
                sequi blanditiis aut ducimus temporibus!
              </p>

              <CollapsibleContent className="space-y-2">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, eligendi, minus aliquam eos molestiae excepturi
                  repellat ut iure deleniti nulla, dicta sapiente itaque facilis
                  unde soluta quam voluptatem rerum ea.
                </p>
              </CollapsibleContent>
              <div className="flex items-center justify-between space-x-4">
                <CollapsibleTrigger asChild>
                  <WeeButton variant={"link"}>
                    {isOpen ? "Read less" : "Read more"}

                    <span className="sr-only">Toggle</span>
                  </WeeButton>
                </CollapsibleTrigger>
              </div>
            </Collapsible>
          </div>
          <div className="flex justify-center">
            <PaymentIco className="w-96 h-96" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecurePayments;
