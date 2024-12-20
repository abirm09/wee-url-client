import stripePaymentImage from "@/assets/images/stripe-payment.png";
import Container from "@/components/Container/Container";
import { DropdownMenuSeparator } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-primary pt-5 text-gray-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="space-y-3">
            <Image
              src={`/logo/logo.jpg`}
              alt="logo"
              width={200}
              height={100}
              className="rounded-md shadow-md"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              porro dolorum deleniti debitis aliquid sed temporibus vel earum
              ullam quas culpa recusandae. Nihil expedita nobis accusantium,
              ducimus nisi repudiandae quidem.
            </p>
            <address>Satkhira, Khulna, Bangladesh</address>
          </div>
          <div>
            <p className="font-bold text-lg">Quick links</p>
            <ul className="flex flex-col mt-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/" },
                { name: "Pricing", path: "/" },
                { name: "Check Url", path: "/check-url" },
              ].map((item) => (
                <Link
                  href={`/${item.path}`}
                  key={item.name}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg">Payment partner</p>
            <Image
              src={stripePaymentImage.src}
              alt="Stripe payment url"
              width={300}
              height={100}
              className="rounded-md mt-3"
            />
          </div>
        </div>
        <DropdownMenuSeparator className="bg-gray-300" />
        <div className="flex justify-center xl:justify-between py-5 flex-wrap">
          <p className="text-xs">
            &#169; <Link href={`/`}>WeeUrl</Link> {date.getFullYear() + ""}, All
            Rights Reserved.
          </p>
          <p className="text-xs">
            Developed and maintained with{" "}
            <span className="text-red-600">&hearts;</span> By{" "}
            <Link
              href={`https://www.abirmahmud.top`}
              className="underline"
              target="_blank"
            >
              MD Abir Mahmud!
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
