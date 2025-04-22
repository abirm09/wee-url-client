import SingleURLClientWrapper from "@/features/dashboard/uRLS/singleURL/SingleURLClientWrapper";

const SingleURL = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <>
      <SingleURLClientWrapper id={id} />
    </>
  );
};

export default SingleURL;
