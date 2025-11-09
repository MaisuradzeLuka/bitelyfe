"use client";

import BlogCard from "@/components/shared/blogCard";
import { DontMissCardsType } from "@/types/dontMissTypes";
import DontMissSkeleton from "./dontMissSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";
import { useGetPostsList } from "../../api";
import { DatabasePost } from "@/types/blogCardTypes";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  const { data: posts, isLoading, isError } = useGetPostsList();

  if (isLoading) return <DontMissSkeleton />;
  if (isError || !posts) return <ErrorComponent />;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {posts.map((item) => (
        <li key={item.$id}>
          <BlogCard
            blog={item as DatabasePost}
            variant={"vertical"}
            tagBg={categoryBg}
            hoverTextColor={hoverTextColor}
            link={`/drinks/${item.$id}`}
            categoryLink={`/drinks/category/${item.category}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default DontMissCards;
