"use client";

import Link from "next/link";

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

const NavLinks = () => {
  return (
    <div className="flex flex-col">
      {navLinks.map((item, index) => (
        <Link
          key={index}
          className="py-2 hover:bg-secondary pl-5 rounded-md transition-all hover:text-primary-subtle text-gray-900"
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
      <div className="flex md:hidden flex-col">
        <hr />
        {[
          {
            name: "Login",
            href: "/auth/login",
          },
          {
            name: "SignIn",
            href: "/auth/signup",
          },
        ].map((item, index) => (
          <Link
            key={index}
            className="py-2 hover:bg-secondary pl-5 rounded-md transition-all hover:text-primary-subtle text-gray-900"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
