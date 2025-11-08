import { Skeleton } from "@/components/ui/skeleton";

const SecondaryPostCardSkeleton = ({
  flexReverse,
}: {
  flexReverse: boolean;
}) => {
  return (
    <li
      className={`flex items-start xs:items-center gap-4 ${
        flexReverse ? "flex-row-reverse justify-end" : "justify-between"
      }`}
    >
      <div className="leading-5 w-full max-w-[200px] bg-gray-30">
        <Skeleton className="w-full h-[18px] mb-2 rounded-sm bg-gray-300" />

        <Skeleton className="w-[80px] h-[13px] rounded-sm bg-gray-300" />
      </div>

      <div className="flex-shrink-0 w-[120px]">
        <Skeleton className="rounded-sm object-cover w-full h-[90px] bg-gray-300" />
      </div>
    </li>
  );
};

export default SecondaryPostCardSkeleton;
