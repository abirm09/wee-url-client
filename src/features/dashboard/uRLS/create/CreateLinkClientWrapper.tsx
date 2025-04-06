"use client";
import { useAppSelector } from "@/redux/hooks";
import { TSubscriptionPlan } from "@/types";
import VerifyEmail from "../../VerifyEmail/VerifyEmail";
import CreateLinkForm from "./CreateLinkForm";

const CreateLinkClientWrapper = ({
  allPlans,
}: {
  allPlans?: TSubscriptionPlan[];
}) => {
  const { user, isUserLoading } = useAppSelector(({ user }) => user);

  if (isUserLoading) return null;

  return (
    <div>
      {user?.isEmailVerified === true ? (
        <CreateLinkForm allPlans={allPlans} user={user} />
      ) : (
        <VerifyEmail />
      )}
    </div>
  );
};

export default CreateLinkClientWrapper;
