"use client";

import { WeeButton } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const BannerCTA = () => {
  const [mounted, setMounted] = useState(false);
  const { user } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Link href={`${user ? "/dashboard" : "/auth/signup"}`}>
        <WeeButton>
          {user ? <>Shorten Now</> : <>Try for free</>}
          <MoveRight />
        </WeeButton>
      </Link>
    </>
  );
};

export default BannerCTA;
