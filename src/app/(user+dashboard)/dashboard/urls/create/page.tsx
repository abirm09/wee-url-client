import { Box } from "@/components";
import { CreateLinkClientWrapper } from "@/features/dashboard";

import useGetSubscriptionPlan from "@/hooks/useGetSubscriptionPlan";

const CreateLink = async () => {
  const { allPlans } = await useGetSubscriptionPlan({});

  return (
    <div className="mt-5">
      <Box>
        <CreateLinkClientWrapper allPlans={allPlans} />
      </Box>
    </div>
  );
};

export default CreateLink;
