"use client";

import WeeButton from "@/components/WeeButton/WeeButton";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileSettings from "./ProfileSettings";

const AuthStateForDesktop = () => {
  const [isClient, setIsClient] = useState(false);

  const { user: authUser } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {authUser ? (
        <>
          <ProfileSettings />
        </>
      ) : (
        <>
          <ul className="flex gap-2">
            <li>
              <Link href={`/auth/login`}>
                <WeeButton
                  variant="link"
                  className="text-base hover:no-underline text-black hover:text"
                >
                  Login
                </WeeButton>
              </Link>
            </li>
            <li>
              <Link href={`/auth/signup`}>
                <WeeButton>Signup</WeeButton>
              </Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default AuthStateForDesktop;
