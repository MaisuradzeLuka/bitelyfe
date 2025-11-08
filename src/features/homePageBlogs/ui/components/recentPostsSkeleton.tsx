import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";
import SectionTitle from "@/components/shared/sectionTitle";

export default function RecentPostsSkeleton() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div>
      <SectionTitle title="Recent Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[30px]">
        {skeletons.map((_, index) => (
          <BlogVerticalSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
