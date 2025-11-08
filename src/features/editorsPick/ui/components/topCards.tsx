"use client";

import BlogCard from "@/components/shared/blogCard";
import { DatabasePost } from "@/types/blogCardTypes";
import { useGetTopCardsList } from "../../api";
import TopCardsSkeleton from "./topCardsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const bgColors = ["bg-[#FFE1DF]", "bg-[#F1F4F9]"];

const TopCards = () => {
  const { data, isLoading, isError } = useGetTopCardsList();

  if (isLoading) return <TopCardsSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 my-8">
      {data.map((card, index) => {
        if (!card) return <div key={index}>No card</div>;
        return (
          <BlogCard
            key={card.$id}
            blog={{ ...(card as unknown as DatabasePost), summary: "" }}
            variant={"blog"}
            className={`${bgColors[index]} p-5 rounded-md`}
            hoverTextColor="hover:text-[#6610f2] lg:text-[20px]"
            imageAspect="lg:aspect-[7/5] lg:max-w-[240px]"
            tagBg="bg-[#ffffff]"
          />
        );
      })}
    </div>
  );
};

export default TopCards;
