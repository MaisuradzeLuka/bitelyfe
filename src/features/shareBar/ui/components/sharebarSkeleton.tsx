import BlogVerticalSkeleton from "@/components/shared/blogVerticalSkeleton";
import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import SectionTitle from "@/components/shared/sectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SharebarSkeleton = () => {
  const skeletons = Array.from({ length: 3 });
  return (
    <PostsPageWrapper>
      <div className="py-8 border-b md:pb-0 border-b-[#eeeeee] flex flex-wrap w-full mb-12">
        <div className="mb-8 pb-8 border-b md:pb-0 border-b-[#eeeeee] text-left w-full md:border-none md:w-1/2 shrink-0">
          <div className="flex flex-col">
            <div className="font-[700] mb-2">
              <FaChevronLeft className="inline text-[16px] mr-2 ml-[-4px]" />
              Newer
            </div>
            <Skeleton className="w-5/6 h-[30px] rounded-md bg-gray-300" />
            <Skeleton className="w-3/5 h-[30px] rounded-md bg-gray-300 mt-4" />
          </div>
        </div>

        <div className="text-right w-full shrink-0 md:w-1/2">
          <div className="flex flex-col">
            <div className="font-[700] mb-[6px] ">
              Older
              <FaChevronRight className="inline text-[16px]  ml-2" />
            </div>

            <Skeleton className="w-5/6 h-[30px] rounded-md bg-gray-300 self-end" />
            <Skeleton className="w-3/5 h-[30px] rounded-md bg-gray-300 mt-4 self-end" />
          </div>
        </div>
      </div>
      <div className="my-10">
        <SectionTitle title="You May Like These Posts" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skeletons.map((_, index) => (
            <BlogVerticalSkeleton key={index} />
          ))}
        </div>
      </div>
    </PostsPageWrapper>
  );
};

export default SharebarSkeleton;
