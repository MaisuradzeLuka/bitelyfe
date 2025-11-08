import { Skeleton } from "@/components/ui/skeleton";

const MainPostCardSkeleton = () => {
  return (
    <div className="relative h-full rounded-md overflow-hidden">
      <Skeleton className="w-full h-auto aspect-[4/3] bg-gray-300" />

      <div className="absolute bottom-0 w-full max-h-[94.5%] p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
        <div className="mb-4 flex items-center gap-4">
          <Skeleton className="w-20 h-6 bg-white/30 rounded-full" />

          <Skeleton className="w-16 h-4 bg-white/20" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-full h-6 bg-white/40 rounded" />
          <Skeleton className="w-4/5 h-6 bg-white/40 rounded" />
        </div>
      </div>
    </div>
  );
};

export default MainPostCardSkeleton;
