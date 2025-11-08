"use client";
import BlogCard from "@/components/shared/blogCard";
import ErrorComponent from "@/components/shared/errorComponent";
import SectionTitle from "@/components/shared/sectionTitle";

import { useGetPosts } from "@/hooks/useGetPosts";
import MayLikeSkeleton from "./mayLikeSkeleton";

const MayLike = ({ category }: { category: string }) => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPosts({ limit: 3, category });
  if (isLoading) return <MayLikeSkeleton />;
  if (!posts || isError) return <ErrorComponent />;

  console.log(posts);

  return (
    <div className="mt-10">
      <SectionTitle title="You may like these posts" />

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((item) => (
          <li key={item.$id}>
            <BlogCard
              blog={item}
              variant={"vertical"}
              hoverTextColor="hover:text-[#6d62ff]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MayLike;
