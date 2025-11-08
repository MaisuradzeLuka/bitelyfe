"use client";

import BreadCrumbs from "@/components/shared/breadCrumbs";
import Image from "next/image";

import DefaultPostIntro from "./defaultPostIntro";
import DefaultPostBody from "./defaultPostBody";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import { useGetPostById } from "../../api";
import DefaultSkeleton from "./defaultSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

export default function DefaultPostArticle({ id }: { id: string }) {
  const { data: posts, isLoading, isError } = useGetPostById(id);
  if (isLoading) return <DefaultSkeleton />;
  if (isError || !posts) return <ErrorComponent />;

  const { summary, title, createdDate, coverimage, category, readtime } =
    posts[0];

  return (
    <div className="sm:px-[15px] md:px-0">
      <BreadCrumbs category={category} title={title} />
      <DefaultPostIntro
        title={title}
        description={summary}
        created_at={createdDate}
        readTime={readtime}
      />

      <div className="relative aspect-[1.43] xl:aspect-[1.78] xl:-ml-[180px] mb-[30px]  ">
        <Image
          src={coverimage}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="flex font-[400] text-[17px] md:gap-[30px]">
        <div className="hidden md:block sticky top-5 flex-shrink-0  w-[50px]  h-[327px] ">
          <ShareLinks flexDirection="flex-col" theme="light" />
        </div>
        <DefaultPostBody image={coverimage} />
      </div>
    </div>
  );
}
