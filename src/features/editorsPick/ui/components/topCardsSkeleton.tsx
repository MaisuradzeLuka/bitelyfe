import { Skeleton } from "@/components/ui/skeleton";

const bgColors = ["bg-[#FFE1DF]", "bg-[#F1F4F9]"];

const TopCardsSkeleton = () => {
  const skeletons = Array.from({ length: 2 });
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-4 p-5 rounded-md ${bgColors[index]}`}
        >
          <Skeleton className="w-full aspect-[1.43] lg:aspect-[7/5] lg:max-w-[240px] rounded-md bg-gray-300" />

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
    </div>
  );
};

export default TopCardsSkeleton;
