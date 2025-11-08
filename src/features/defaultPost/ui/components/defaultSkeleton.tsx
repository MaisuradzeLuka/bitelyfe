import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function DefaultSkeleton() {
  return (
    <div className="sm:px-[15px] md:px-0 animate-pulse">
      <PostsPageWrapper>
        <div className="flex mb-4 text-[14px] font-[500]">
          <Skeleton className="h-4 w-16 bg-gray-300 rounded-md mr-2" />
          <Skeleton className="h-4 w-20 bg-gray-300 rounded-md mr-2" />
          <Skeleton className="h-4 w-40 bg-gray-300 rounded-md" />
        </div>

        <Skeleton className="h-10 w-5/6 bg-gray-300 rounded-md mb-4" />

        <div>
          <Skeleton className="h-6 w-3/4 bg-gray-300 rounded-md" />
          <Skeleton className="h-6 w-1/2 bg-gray-300 rounded-md my-4" />
        </div>

        <Skeleton className="relative w-full xl:w-[123%] aspect-[1.43] xl:aspect-[1.78] bg-gray-300 rounded-sm  xl:-ml-[180px] mb-[30px]" />

        <Skeleton className="w-full h-[300px] bg-gray-300" />
        <Skeleton className="w-3/4 h-[200px] bg-gray-300 my-8 ml-6" />
        <Skeleton className="w-full h-[250px] bg-gray-300 mb-8" />
      </PostsPageWrapper>
    </div>
  );
}
