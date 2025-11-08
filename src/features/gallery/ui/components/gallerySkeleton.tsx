import SectionTitle from "@/components/shared/sectionTitle";
import Wrapper from "@/components/shared/wrapper";
import { Skeleton } from "@/components/ui/skeleton";

const GallerySkeleton = () => {
  const skeletons = Array.from({ length: 6 });

  return (
    <section className="my-8 bg-[#03071E] text-white">
      <Wrapper className="relative grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-3 gap-6 pt-30 pb-16 mx-auto ">
        <SectionTitle
          title="Gallery"
          styles="absolute left-4 sm:left-0 md:left-0 top-18 items-end"
        />

        <div className="lg:col-span-4 xl:col-span-2 ">
          <Skeleton className="w-full h-full lg:h-[600px] bg-gray-300 rounded-sm" />
        </div>

        <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
          <div className="h-full max-h-[600px] flex flex-col gap-4 rounded-sm bg-[#03071E] px-6 py-4 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#4a5568_#1a202c] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 [&::-webkit-scrollbar-thumb]:transition-colors">
            {skeletons.map((_, index) => (
              <Skeleton
                key={index}
                className="w-full aspect-3/2 bg-gray-300 rounded-sm"
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default GallerySkeleton;
