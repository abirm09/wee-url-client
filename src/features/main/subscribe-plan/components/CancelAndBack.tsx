"use client";

import { WeeButton } from "@/components";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CancelAndBack = () => {
  const router = useRouter();
  return (
    <>
      <WeeButton
        onClick={() => router.back()}
        className="bg-transparent text-primary shadow-none hover:bg-transparent"
      >
        <ArrowLeft /> Cancel and back
      </WeeButton>
    </>
  );
};

export default CancelAndBack;
