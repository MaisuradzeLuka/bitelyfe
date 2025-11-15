"use client";

import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import LoadMoreButton from "@/components/shared/loadMoreButton";
import { useGetPosts } from "@/hooks/useGetPosts";
import { useSearchParams } from "next/navigation";
import BlogsSkeleton from "./blogsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";
import { DRINKSTABLE_ID } from "@/lib/config";
import { useGetBlogs } from "../../api";

export default function Blogs({
  blogCategory,
  tableId,
}: {
  blogCategory?: string;
  tableId: string;
}) {
  const searchParams = useSearchParams();
  const currentLimit = Number(searchParams.get("limit")) || 6;

  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
  } = useGetBlogs(
    tableId,
    currentLimit,
    blogCategory && blogCategory.length > 0 ? blogCategory : undefined
  );

  if (isLoading) return <BlogsSkeleton />;
  if (isError || !posts) return <ErrorComponent />;

  const linkByTable = tableId.replace("table", "");

  return (
    <div className="mb-15">
      <BlogCardContainer className="mt-0 sm:grid-cols-2 lg:grid-cols-1">
        {posts.map((blog) => (
          <BlogCard
            key={blog.$id}
            variant="blog"
            blog={blog}
            hoverTextColor="hover:text-[#6d62ff]"
            link={`/${linkByTable}/${blog.$id}`}
            categoryLink={`/${linkByTable}/category/${blog.category}`}
          />
        ))}
      </BlogCardContainer>
      <LoadMoreButton
        increment={4}
        defaultLimit={currentLimit}
        isFetching={isFetching}
        postsLength={posts.length}
      />
    </div>
  );
}
