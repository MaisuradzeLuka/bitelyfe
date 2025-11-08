import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";

const DontMissSkeleton = () => {
  const skeletons = Array.from({ length: 4 });
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {skeletons.slice(0, 4).map((item, index) => (
        <li key={index}>
          <BlogVerticalSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default DontMissSkeleton;
