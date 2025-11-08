import { Skeleton } from "@/components/ui/skeleton";

const ArticleSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton className="w-full h-[400px] bg-gray-300" />
      <Skeleton className="w-3/4 h-[300px] bg-gray-300 my-8" />
    </div>
  );
};

export default ArticleSkeleton;
