"use client";

import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Check URL",
    href: "/check-url",
  },
  {
    name: "API",
    href: "/api",
  },
  {
    name: "Support",
    href: "/support",
  },
];

const NavLinks = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { user: authUser } = useAppSelector(({ auth }) => auth);

  if (!mounted) {
    return null;
  }
  return (
    <ul className={`${cn("flex flex-col", className)}`}>
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link
            className="px-4 py-2 hover:text-primary inline-block transition-all"
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}
      {Object.keys(authUser || {}).length ? (
        <>
          <li className="block lg:hidden">
            <Link
              className="px-4 py-2 hover:text-primary inline-block transition-all"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="block lg:hidden">
            <Link
              className="px-4 py-2 hover:text-primary inline-block transition-all"
              href={"/auth/login"}
            >
              Login
            </Link>
          </li>
          <li className="block lg:hidden">
            <Link
              className="px-4 py-2 hover:text-primary inline-block transition-all"
              href={"/auth/signup"}
            >
              Signup
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
