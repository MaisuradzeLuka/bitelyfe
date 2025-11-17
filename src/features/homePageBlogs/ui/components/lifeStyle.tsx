"use client";

import MainPostCard from "@/components/shared/mainPostCard";
import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import SectionTitle from "@/components/shared/sectionTitle";
import { useGetPostsList } from "../../api";
import LifeStyleSkeleton from "./lifeStyleSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const LifeStyle = () => {
  const { data, isLoading, isError } = useGetPostsList();

  if (isLoading) return <LifeStyleSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  const mainPost = data[0];

  return (
    <div className="2xl:w-[840px] xl:w-[730px] lg:w-[610px] md:w-[690px] sm:w-[510px] mx-auto md:px-0 2xl:pl-[15px] mb-12">
      <SectionTitle title="Top Ingredients" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-4">
        <MainPostCard
          date={"6, January 2020"}
          titleClassname={"text-2xl"}
          title={mainPost.title}
          category={mainPost.category}
          image={mainPost.coverimage}
          height="md:h-[420px]"
          link={`/products/${mainPost.$id}`}
        />

        <ul className="h-full grid grid-cols-1 gap-4 py-4 md:py-0">
          {data.slice(1, 5).map((item) => (
            <SecondaryPostPard
              date={"6, January 2020"}
              key={item.$id}
              image={item.coverimage}
              title={item.title}
              theme="light"
              flexReverse={false}
              styles="bg-transparent text-sm xs:text-[16px] lg:text-[16px]"
              titleClassname="hover:text-[#6610f2]"
              height="h-[80px]"
              link={`/products/${item.$id}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeStyle;
