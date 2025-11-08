import AdminForm from "@/features/adminCreateForm/ui/views/adminForm-view";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="adminContentWrapper">
      <h1 className="text-xl font-medium my-4">Create new post</h1>

      <AdminForm id={id} />
    </div>
  );
}

export default page;
