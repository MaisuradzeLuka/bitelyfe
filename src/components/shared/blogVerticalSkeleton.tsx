import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogVerticalSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      <Skeleton className="w-full aspect-7/5 bg-gray-300" />

      <div className="flex items-center gap-2">
        <Skeleton className="w-[60px] h-[25px] rounded-full bg-gray-300" />
        <Skeleton className="w-[100px] h-[20px] rounded-md bg-gray-300" />
      </div>

      <div className="flex flex-col items-start gap-3">
        <Skeleton className="w-full h-[20px] rounded-lg bg-gray-300" />
        <Skeleton className="w-3/4 h-[20px] rounded-lg bg-gray-300" />
      </div>
    </div>
  );
};

export default BlogVerticalSkeleton;
