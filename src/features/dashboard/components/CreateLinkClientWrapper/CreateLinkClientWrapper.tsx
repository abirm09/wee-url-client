"use client";

import { useAppSelector } from "@/redux/hooks";
import { TSubscriptionPlan } from "@/types";
import CreateLinkForm from "../CreateLinkForm/CreateLinkForm";
import VerifyEmail from "../VerifyEmail/VerifyEmail";

const CreateLinkClientWrapper = ({
  allPlans,
}: {
  allPlans?: TSubscriptionPlan[];
}) => {
  const { user } = useAppSelector(({ user }) => user);

  return (
    <div>
      {user?.isEmailVerified === true ? (
        <CreateLinkForm allPlans={allPlans} />
      ) : (
        <VerifyEmail />
      )}
    </div>
  );
};

export default CreateLinkClientWrapper;
