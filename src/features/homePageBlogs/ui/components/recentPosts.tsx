"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import { useGetPosts } from "@/hooks/useGetPosts";
import LoadMoreButton from "@/components/shared/loadMoreButton";
import { useSearchParams } from "next/navigation";
import RecentPostsSkeleton from "./recentPostsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

export default function RecentPosts() {
  const searchParams = useSearchParams();
  const currentLimit = Number(searchParams.get("limit")) || 6;
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
  } = useGetPosts({
    sortBy: "$createdAt",
    sortOrder: "desc",
    limit: currentLimit,
  });

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
          />
        ))}
      </BlogCardContainer>
      <LoadMoreButton increment={3} defaultLimit={6} isFetching={isFetching} />
    </>
  );
}
