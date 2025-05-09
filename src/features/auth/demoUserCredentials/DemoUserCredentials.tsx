import demoUsers from "@/../public/json/demo_users.json";
import { Input } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import DemoUserCredentialsCopy from "@/features/auth/login/DemoUserCredentialsCopy";
const DemoUserCredentials = () => {
  return (
    <div className="col-span-2 md:col-span-1 p-3 flex justify-center">
      <div className="max-w-xl space-y-4 mt-5 md:mt-40">
        <h3 className="text-2xl font-semibold text-primary bg-info-subtle text-center">
          Attention please!
        </h3>
        <p className="text-center text-gray-700">
          To explore the features of our platform, you can use the demo accounts
          provided below. Each account represents a different subscription plan
          and user role, showcasing how the platform looks and functions from
          various perspectives. Simply copy any demo user credentials to log in
          and start exploring!
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
                        <DemoUserCredentialsCopy value={user.password} />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default DemoUserCredentials;
