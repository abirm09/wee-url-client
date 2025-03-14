import { Box } from "@/components";
import { CreateLinkForm } from "@/features/dashboard/components";
import useGetSubscriptionPlan from "@/hooks/useGetSubscriptionPlan";

const CreateLink = async () => {
  const { allPlans } = await useGetSubscriptionPlan({});
  return (
    <div className="mt-5">
      <Box className="shadow-sm">
        <CreateLinkForm allPlans={allPlans} />
      </Box>
    </div>
  );
};

export default CreateLink;
