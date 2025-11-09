import BlogView from "@/features/blogCategories/ui/views/blog-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";

type ParamsType = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page({ params }: ParamsType) {
  const { id } = await params;

  return (
    <>
      <BlogView blogCategory={id} />
      <DontMiss className="purpleLinearBackground text-white" />
    </>
  );
}
