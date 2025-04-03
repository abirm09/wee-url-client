const EditURL = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h2>Edit URL and id = {id}</h2>
    </div>
  );
};

export default EditURL;
