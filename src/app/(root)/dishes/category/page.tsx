import BlogView from "@/features/blogCategories/ui/views/blog-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import { DISHESTABLE_ID } from "@/lib/config";

export default async function page() {
  return (
    <>
      <BlogView blogCategory="" tableId={DISHESTABLE_ID} />
      <DontMiss className="purpleLinearBackground text-white" />
    </>
  );
}
