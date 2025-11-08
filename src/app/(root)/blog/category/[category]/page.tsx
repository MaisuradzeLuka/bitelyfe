import BlogView from "@/features/blogCategories/ui/views/blog-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";

type ParamsType = {
  params: {
    category: string;
  };
};

export default async function page({ params }: ParamsType) {
  const { category } = await params;

  return (
    <>
      <BlogView blogCategory={category} />
      <DontMiss className="purpleLinearBackground text-white" />
    </>
  );
}
