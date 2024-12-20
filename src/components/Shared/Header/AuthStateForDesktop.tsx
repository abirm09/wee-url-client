"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileSettings from "./ProfileSettings";

const AuthStateForDesktop = () => {
  const [isClient, setIsClient] = useState(false);

  const { user: authUser } = useAppSelector(({ auth }) => auth);

  const nonLoggedInUsersItems = [
    { name: "Login", url: "login" },
    { name: "Signup", url: "signup" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      {authUser ? (
        <>
          <ProfileSettings />
        </>
      ) : (
        <>
          <div className="flex gap-2">
            {nonLoggedInUsersItems.map((item, index) => (
              <div key={item.url} className="flex gap-2 items-center">
                <Link
                  href={`/auth/${item.url}`}
                  className="hover:bg-secondary px-3 py-2 rounded-md"
                >
                  {item.name}
                </Link>
                {index === nonLoggedInUsersItems.length - 1 ? null : (
                  <>
                    <span className={`w-px h-6 bg-gray-200 mt-px mx-3`}></span>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AuthStateForDesktop;
