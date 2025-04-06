import SingleURLClientWrapper from "@/features/dashboard/uRLS/singleURL/SingleURLClientWrapper";

const SingleURL = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h2>Single URL and id = {id}</h2>
      <SingleURLClientWrapper />
    </div>
  );
};

export default SingleURL;
