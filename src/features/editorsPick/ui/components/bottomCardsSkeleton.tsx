import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";
import Wrapper from "@/components/shared/wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BottomCardsSkeleton = () => {
  const skeletons = Array.from({ length: 2 });
  return (
    <div className="xl:w-[1230px] 2xl:w-[1370px]  xl:bg-[#FFE1DF] mx-auto  xl:rounded-[50px] ">
      <Wrapper className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-15">
        <div className="flex flex-col-reverse md:flex-row gap-2 sm:col-span-2">
          <div className="w-full md:flex-1 flex flex-col justify-center gap-2 ">
            <div className="flex items-center gap-2">
              <Skeleton className="w-[60px] h-[25px] rounded-full bg-gray-300" />
              <Skeleton className="w-[100px] h-[20px] rounded-md bg-gray-300" />
            </div>

            <div className="flex flex-col items-start gap-3">
              <Skeleton className="w-full h-[20px] rounded-lg bg-gray-300" />
              <Skeleton className="w-3/4 h-[20px] rounded-lg bg-gray-300" />
            </div>
          </div>

          <Skeleton className="w-full md:w-1/2 aspect-[1.43] bg-gray-300" />
        </div>

        {skeletons.map((_, index) => (
          <BlogVerticalSkeleton key={index} />
        ))}
      </Wrapper>
    </div>
  );
};

export default BottomCardsSkeleton;
