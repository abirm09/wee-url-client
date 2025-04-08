"use client";

import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  WeeButton,
} from "@/components";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { cn } from "@/lib/utils";
import {
  useAllTagsForCustomerQuery,
  useCreateUrlMutation,
} from "@/redux/features/url/urlApi";
import {
  TApiErrorMessage,
  TApiErrorResponse,
  TSubscriptionPlan,
  TUser,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MultiValue } from "react-select";
import Creatable from "react-select/creatable";
import { z } from "zod";

const formSchema = z.object({
  fullUrl: z.string().min(5, "Full url must be at least 5 characters"),
  shortCode: z.string().optional(),
  expiresAt: z.string().optional(),
  tags: z.string().array().optional(),
  password: z.string().optional(),
});

const CreateLinkForm = ({
  allPlans,
  user,
}: {
  allPlans?: TSubscriptionPlan[];
  user: TUser;
}) => {
  const { data: prevTagsRes } = useAllTagsForCustomerQuery({});
  const prevTagsData = (prevTagsRes?.data?.tags || []) as string[];

  const creatableOptions = prevTagsData?.map((item) => ({
    value: item,
    label: item,
  }));
  const [selectedTags, setSelectedTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);

  const usersSubscribedPlan = allPlans?.find(
    (item) => item.type === user?.subscriptions![0]?.plan?.type
  );

  // Form data states
  const [expiresAt, setExpiresAt] = useState<Date | undefined>();

  // create url query
  const [createNewURL, { isLoading: isUrlCreationLoading }] =
    useCreateUrlMutation();
  const [errors, setErrors] = useState<TApiErrorMessage[] | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullUrl: "",
      shortCode: "",
      expiresAt: "",
      password: "",
      tags: undefined,
    },
  });
  function resetForm() {
    form.reset();
    setExpiresAt(undefined);
    setSelectedTags([]);
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrors(null);

    values.tags = selectedTags.map((item) => item.value);

    values.expiresAt = expiresAt?.toISOString();
    try {
      await createNewURL({ url: values }).unwrap();
      toast.success("Url created successfully!");
      resetForm();
    } catch (error) {
      const err = error as TApiErrorResponse;
      setErrors(err?.data?.errorMessages);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div className="col-span-3">
            <FormField
              control={form?.control}
              name="fullUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full url <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/your-long-url-here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form?.control}
              name="shortCode"
              disabled={usersSubscribedPlan?.customURLSlug === false}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom short code </FormLabel>
                  <FormControl>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-full" type="button">
                          <Input placeholder="cu-code" {...field} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {usersSubscribedPlan?.customURLSlug === false
                              ? `Not available for ${usersSubscribedPlan?.name} users`
                              : ""}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form?.control}
              name="expiresAt"
              disabled={usersSubscribedPlan?.customURLSlug === false}
              render={() => (
                <FormItem>
                  <FormLabel>Expiration date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal active:scale-100",
                            !expiresAt && "text-muted-foreground"
                          )}
                          type="button"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expiresAt ? (
                            format(expiresAt, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Calendar
                          mode="single"
                          selected={expiresAt}
                          onSelect={(date) => setExpiresAt(date || undefined)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form?.control}
              name="tags"
              render={() => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Creatable
                      isMulti={true}
                      isSearchable={true}
                      isClearable={true}
                      options={creatableOptions}
                      value={selectedTags}
                      onChange={(v) => setSelectedTags(v)}
                      className="rounded-md shadow-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {errors?.length ? (
            <div className="col-span-3">
              <ul className="list-disc error-message ml-5">
                {errors.map((error) => (
                  <li key={error.message}>
                    <ErrorMessage>{error?.message}</ErrorMessage>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
          <div className="col-span-3">
            <WeeButton type="submit" disabled={isUrlCreationLoading}>
              Create
            </WeeButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateLinkForm;
