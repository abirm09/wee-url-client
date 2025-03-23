import { WeeButton } from "@/components";
import Link from "next/link";

const ForgetPassword = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center space-y-3">
        <h5>Thanks for your Interest!</h5>
        <h4 className="font-bold text-3xl animate-bounce">
          This page is under development!
        </h4>
        <Link href={"/"} className="block">
          <WeeButton>Go to home</WeeButton>
        </Link>
      </div>
    </section>
  );
};

export default ForgetPassword;
