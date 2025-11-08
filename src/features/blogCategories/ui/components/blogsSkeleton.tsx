"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function BlogsSkeleton() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-15">
      {skeletons.map((_, i) => (
        <div key={i} className={`flex flex-col lg:flex-row gap-4 `}>
          <Skeleton className="w-full aspect-[1.43] lg:aspect-[7/5] lg:max-w-[240px] xl:max-w-[360px] rounded-md bg-gray-300" />

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
        </div>
      ))}

      {/* Load more button placeholder */}
      <div className="flex justify-center mt-12">
        <div className="h-10 w-36 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
