import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";
import SectionTitle from "@/components/shared/sectionTitle";

const MayLikeSkeleton = () => {
  const skeletons = Array.from({ length: 3 });
  return (
    <div className="my-10">
      <SectionTitle title="You May Like These Posts" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skeletons.map((_, index) => (
          <BlogVerticalSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default MayLikeSkeleton;
