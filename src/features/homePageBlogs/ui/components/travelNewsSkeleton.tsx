import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";
import SectionTitle from "@/components/shared/sectionTitle";

export default function TravelNewsSkeleton() {
  const skeletons = Array.from({ length: 3 });

  return (
    <div>
      <SectionTitle title="Best For BiteLyfe" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[60px]">
        {skeletons.map((_, index) => (
          <BlogVerticalSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
