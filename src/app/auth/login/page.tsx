import { LoginForm } from "@/features/auth";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("_wee_url");
  const params = await searchParams;
  const callBackPath = Array.isArray(params?.callback_path)
    ? params?.callback_path![0] || "/"
    : params?.callback_path || "/";

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
                    width={300}
                    height={100}
                    className="rounded-lg aspect-auto w-40 md:w-56"
                  />
                </Link>
              </div>
              <LoginForm callBackPath={callBackPath} />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 m-3 rounded-lg p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            eaque sapiente, consequuntur iusto, consectetur quidem harum sunt
            ratione praesentium ullam aliquid ex delectus eveniet! Totam,
            minima. Voluptate natus commodi illum?
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
