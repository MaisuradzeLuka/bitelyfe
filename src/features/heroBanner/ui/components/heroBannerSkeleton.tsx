import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HeroBannerSkeleton = () => {
  return (
    <div className="relative">
      <div className="lg:absolute inset-0 flex items-center justify-center bg-transparent my-8 z-20">
        <PostsPageWrapper>
          <div className="mb-6 text-black lg:text-white lg:text-center">
            <Skeleton className="w-full h-[40px] rounded-md bg-gray-400" />
            <Skeleton className="w-3/5 h-[25px] rounded-md bg-gray-400 my-6 lg:mx-auto" />

            <div className="flex items-center justify-between">
              <Skeleton className="w-[200px] h-[20px] rounded-md bg-gray-400" />
              <Skeleton className="w-[100px] h-[20px] rounded-md bg-gray-400" />
            </div>
          </div>
        </PostsPageWrapper>
      </div>

      <Skeleton className="w-full bg-gray-300 aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5]" />
    </div>
  );
};

export default HeroBannerSkeleton;
