import MainPostCardSkeleton from "@/components/shared/mainPostCardSkeleton";
import SecondaryPostCardSkeleton from "@/components/shared/secondaryCardSkeleton";
import SectionTitle from "@/components/shared/sectionTitle";

const LifeStyleSkeleton = () => {
  const skeletons = Array.from({ length: 4 });
  return (
    <div className="2xl:w-[840px] xl:w-[730px] lg:w-[610px] md:w-[690px] sm:w-[510px] mx-auto md:px-0 2xl:pl-[15px] mb-12">
      <SectionTitle title="Top Ingredients" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-4">
        <MainPostCardSkeleton />

        <ul className="h-full grid grid-cols-1 gap-4 py-4 md:py-0">
          {skeletons.map((_, index) => (
            <SecondaryPostCardSkeleton key={index} flexReverse={false} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeStyleSkeleton;
