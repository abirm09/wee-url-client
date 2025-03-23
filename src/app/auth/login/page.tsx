import { LoginForm } from "@/features/auth";
import DemoUserCredentials from "@/features/auth/demoUserCredentials/DemoUserCredentials";
import { TSearchParams } from "@/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<TSearchParams>;
}) => {
  const { redirect_path } = await searchParams;
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("_wee_url");
  const callbackPath =
    (Array.isArray(redirect_path) ? redirect_path[0] : redirect_path) || "/";

  if (authCookie) {
    redirect("/");
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-2 min-h-screen">
          <div className="col-span-2 md:col-span-1 p-3">
            <div className="relative top-1/2 -translate-y-1/2">
              <div className="flex justify-center pt-5">
                <Link href={`/`} className="">
                  <Image
                    src="/logo/logo.png"
                    alt="WeeUrl brand logo"
                    width={175}
                    height={35}
                  />
                </Link>
              </div>
              <LoginForm callbackPath={callbackPath} />
            </div>
          </div>
          <DemoUserCredentials />
        </div>
      </section>
    </>
  );
};

export default Page;
