"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import LoadMoreButton from "@/components/shared/loadMoreButton";
import { useSearchParams } from "next/navigation";
import RecentPostsSkeleton from "./recentPostsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";
import { useGetRecentPosts } from "../../api";

export default function RecentPosts() {
  const searchParams = useSearchParams();
  const currentLimit = Number(searchParams.get("limit")) || 6;

  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
  } = useGetRecentPosts(currentLimit);

  if (isLoading) return <RecentPostsSkeleton />;
  if (isError || !posts) return <ErrorComponent />;

  return (
    <>
      <BlogCardContainer
        categoryTitle="Recent Posts"
        className="md:grid-cols-2 mb-[30px]"
      >
        {posts.map((blog) => (
          <BlogCard
            key={blog.$id}
            blog={blog}
            variant="vertical"
            imageAspect="aspect-[1.59]"
            hoverTextColor="hover:text-[#6d62ff]"
            link={`/${blog.tableId.replace("table", "")}/${blog.$id}`}
            categoryLink={`/${blog.tableId.replace("table", "")}/category/${
              blog.category
            }`}
          />
        ))}
      </BlogCardContainer>
      <LoadMoreButton
        defaultLimit={6}
        isFetching={isFetching}
        postsLength={posts.length}
      />
    </>
  );
}
