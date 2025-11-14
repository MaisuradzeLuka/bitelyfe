"use client";

import BlogCard from "@/components/shared/blogCard";
import ErrorComponent from "@/components/shared/errorComponent";
import SectionTitle from "@/components/shared/sectionTitle";

import MayLikeSkeleton from "./mayLikeSkeleton";
import { useGetMayLikePosts } from "../../api";

const MayLike = ({
  category,
  tableId,
}: {
  category: string;
  tableId: string;
}) => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetMayLikePosts(category, tableId);
  if (isLoading) return <MayLikeSkeleton />;
  if (!posts || isError) return <ErrorComponent />;

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
