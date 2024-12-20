import demoUsers from "@/../public/json/demo_users.json";
import { Input } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { LoginForm } from "@/features/auth";
import DemoUserCredentialsCopy from "@/features/auth/login/DemoUserCredentialsCopy";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("_wee_url");
  const callbackPath = "/"; //TODO: Implement callback url system

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
                    className="rounded-lg aspect-auto w-10 md:w-20"
                  />
                </Link>
              </div>
              <LoginForm callbackPath={callbackPath} />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 p-3">
            <div className="relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="max-w-xl space-y-4">
                <h3 className="text-2xl font-semibold text-primary bg-info-subtle text-center">
                  Attention please!
                </h3>
                <p className="text-center text-gray-700">
                  To explore the features of our platform, you can use the demo
                  accounts provided below. Each account represents a different
                  subscription plan and user role, showcasing how the platform
                  looks and functions from various perspectives. Simply copy any
                  demo user credentials to log in and start exploring!
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {demoUsers
                    .sort((a, b) => a.id - b.id)
                    .map((user) => (
                      <AccordionItem value={`item-${user.id}`} key={user.id}>
                        <AccordionTrigger>{user.acType}</AccordionTrigger>
                        <AccordionContent>
                          <div className="p-2 space-y-4">
                            <div className="flex flex-col gap-2">
                              <Label>Email</Label>
                              <div className="flex gap-2 justify-between">
                                <Input defaultValue={user.email} readOnly />
                                <DemoUserCredentialsCopy value={user.email} />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label>Password</Label>
                              <div className="flex gap-2 justify-between">
                                <Input defaultValue={user.password} readOnly />
                                <DemoUserCredentialsCopy
                                  value={user.password}
                                />
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
