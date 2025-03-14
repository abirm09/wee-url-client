import { Box } from "@/components";
import CreateLinkClientWrapper from "@/features/dashboard/components/CreateLinkClientWrapper/CreateLinkClientWrapper";
import useGetSubscriptionPlan from "@/hooks/useGetSubscriptionPlan";

const CreateLink = async () => {
  const { allPlans } = await useGetSubscriptionPlan({});
  return (
    <div className="mt-5">
      <Box className="shadow-sm">
        <CreateLinkClientWrapper allPlans={allPlans} />
      </Box>
    </div>
  );
};

export default CreateLink;
