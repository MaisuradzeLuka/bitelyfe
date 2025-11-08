import { Skeleton } from "@/components/ui/skeleton";

export default function FaqSkeleton() {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1 max-h-[600px]">
      <div className=" max-h-[600px] flex flex-col gap-4 rounded-sm bg-[#03071E] px-6 py-4 overflow-y-hidden ">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton
            key={i}
            className="w-full aspect-[3/2] rounded-sm bg-gray-600/60 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
