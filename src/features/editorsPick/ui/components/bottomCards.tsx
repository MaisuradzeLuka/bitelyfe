"use client";

import BlogCard from "@/components/shared/blogCard";
import Wrapper from "@/components/shared/wrapper";
import { useGetBottomCardsList } from "../../api";
import BottomCardsSkeleton from "./bottomCardsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const BottomCards = () => {
  const { data, isLoading, isError } = useGetBottomCardsList();

  if (isLoading) return <BottomCardsSkeleton />;
  if (isError || !data)
    return <ErrorComponent className="xl:w-[1230px] 2xl:w-[1370px]" />;

  const mainCard = data[0];

  return (
    <div className="xl:w-[1230px] 2xl:w-[1370px]  xl:bg-[#FFE1DF] mx-auto  xl:rounded-[50px] ">
      <Wrapper className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-15">
        <BlogCard
          blog={{ ...mainCard, category: mainCard.region } as any}
          variant={"reverse"}
          className="bg-[#F1F4F9] sm:col-span-2 lg:gap-[0px]"
          hoverTextColor="hover:text-[#6610f2]"
          link={`/dishes/${mainCard.$id}`}
          categoryLink={`/dishes/category/${mainCard.category}`}
        />

        {data.slice(1, 3).map((card) => (
          <BlogCard
            key={card.$id}
            blog={{ ...card, category: card.region } as any}
            variant={"vertical"}
            hoverTextColor="hover:text-[#6610f2]"
            tagBg="xl:bg-white"
            link={`/dishes/${card.$id}`}
            categoryLink={`/dishes/category/${card.category}`}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default BottomCards;
