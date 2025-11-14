"use client";

import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "./sidebarNews";
import TopCategories from "@/features/topCategories/ui/views/topCategories-view";

import { useGetDailyNewsList } from "@/features/homePageBlogs/api";
import { PostType } from "@/types/postType";
import SectionSideSkeleton from "./sectionSidebarSkeleton";
import ErrorComponent from "./errorComponent";
import AdvertisementBanner from "./advertisementBanner";

export default function SectionSidebar() {
  const { data, isLoading, isError } = useGetDailyNewsList();

  if (isLoading) return <SectionSideSkeleton />;
  if (!data || isError) return <ErrorComponent className="max-h-[400px]" />;

  return (
    <div className="mb-15 w-full px-[15px] lg:pr-[15px]  lg:col-span-1 ">
      <div className="xl:pl-[15px]">
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />

        <SidebarNews title="Daily news" posts={data as unknown as PostType[]} />
        {/* <TopCategories /> */}
      </div>
      <AdvertisementBanner image="/linedev.png" position="sticky" />
    </div>
  );
}
