import { Skeleton } from "@/components/ui/skeleton";
import Wrapper from "@/components/shared/wrapper";

const HeroSkeleton = () => {
  return (
    <section className="relative w-full flex flex-col justify-between py-9 rounded-sm bg-gray-200 aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5]">
      <div className="absolute inset-0 bg-black/25 rounded-sm" />

      <Wrapper className="w-full z-10 flex flex-col justify-between h-full lg:pt-10">
        <div className="flex items-center flex-1 text-white ">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="w-20 h-6 bg-white/30 rounded-full" />
              <Skeleton className="w-24 h-4 bg-white/20" />
            </div>

            <div className="max-w-[600px] mb-6 space-y-2">
              <Skeleton className="w-full h-8 bg-white/40 rounded" />
              <Skeleton className="w-4/5 h-8 bg-white/40 rounded" />
              <Skeleton className="w-3/5 h-8 bg-white/40 rounded" />
            </div>

            <div className="max-w-2xl hidden sm:block space-y-2">
              <Skeleton className="w-full h-5 bg-white/30 rounded" />
              <Skeleton className="w-5/6 h-5 bg-white/30 rounded" />
              <Skeleton className="w-4/6 h-5 bg-white/30 rounded" />
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 xl:grid-cols-4 overflow-hidden gap-7">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`h-max bg-white/20 backdrop-blur-md rounded-sm flex items-center gap-4 px-2 py-3 ${
                index > 1 ? "hidden xl:flex" : ""
              }`}
            >
              <Skeleton className="w-18 h-18 rounded-full bg-white/30" />

              <div className="space-y-1 flex-1">
                <Skeleton className="w-full h-4 bg-white/40 rounded" />
                <Skeleton className="w-3/4 h-4 bg-white/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSkeleton;
