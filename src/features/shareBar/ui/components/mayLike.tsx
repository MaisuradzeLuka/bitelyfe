"use client";

import BlogCard from "@/components/shared/blogCard";
import ErrorComponent from "@/components/shared/errorComponent";
import SectionTitle from "@/components/shared/sectionTitle";

import { useGetPosts } from "@/hooks/useGetPosts";
import MayLikeSkeleton from "./mayLikeSkeleton";
import { DRINKSTABLE_ID } from "@/lib/config";
import { useGetMayLikePosts } from "../../api";
import { DatabasePost } from "@/types/blogCardTypes";

const MayLike = ({ category }: { category: string }) => {
  const { data: posts, isLoading, isError } = useGetMayLikePosts(category);
  if (isLoading) return <MayLikeSkeleton />;
  if (!posts || isError) return <ErrorComponent />;

  return (
    <div className="mt-10">
      <SectionTitle title="You may like these posts" />

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((item) => (
          <li key={item.$id}>
            <BlogCard
              blog={item as DatabasePost}
              variant={"vertical"}
              hoverTextColor="hover:text-[#6d62ff]"
              link={`/drinks/${item.$id}`}
              categoryLink={`/drinks/category/${item.category}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MayLike;
