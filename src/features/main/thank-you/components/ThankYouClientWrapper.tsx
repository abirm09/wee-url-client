"use client";

import FireworksIco from "@/assets/images/others/fireworks.svg";
import { Confetti, ConfettiRef } from "@/components";
import SparklesText from "@/components/ui/sparkles-text";
import { useAppSelector } from "@/redux/hooks";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ThankYouClientWrapper = () => {
  const { paymentIntentId, selectedPlan } = useAppSelector(
    ({ common }) => common
  );
  const [showConfetti, setShowConfetti] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const confettiRef = useRef<ConfettiRef>(null);
  useEffect(() => {
    setMounted(true);
    confettiRef.current?.fire({});
    if (!paymentIntentId) {
      router.push("/");
    }

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  }, [paymentIntentId]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="py-10 w-full flex justify-center">
      <div className="max-w-2xl flex flex-col items-center relative gap-5">
        <SparklesText
          text="Payment successful!"
          className="text-center text-2xl md:text-5xl font-bold"
        />
        <div
          className="w-20 h-20 bg-green-500 rounded-full my-2 flex justify-center items-center"
          data-aos="zoom-in"
        >
          <Check
            className="w-14 h-14 text-white font-bold"
            data-aos="zoom-out"
            data-aos-delay="500"
          />
        </div>
        <p>
          This is our official confirmation. Thank for joining{" "}
          <Link href={"/"} className="text-primary font-semibold">
            WeeURL
          </Link>{" "}
          {selectedPlan} family.
        </p>
        <FireworksIco />
      </div>
      {showConfetti ? (
        <Confetti ref={confettiRef} className="fixed w-full h-full" />
      ) : null}
    </div>
  );
};

export default ThankYouClientWrapper;
