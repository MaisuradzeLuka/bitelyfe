"use client";

import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import Tags from "../components/tags";
import MayLike from "../components/mayLike";
import NextPostLinks from "@/features/shareBar/ui/components/nextPostLinks";
import { useGetShareInfo } from "../../api";
import SharebarSkeleton from "../components/sharebarSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const ShareBar = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetShareInfo(id);

  if (isLoading) return <SharebarSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  return (
    <section className="my-8">
      <PostsPageWrapper>
        <Tags tags={data[0].tags} />

        <div className="border border-gray-200 p-4">
          <ShareLinks flexDirection="flex-row" theme="dark" />
        </div>

        <div className="flex flex-col md:flex-row font-bold">
          <NextPostLinks createdAt={data[0].$createdAt} />
        </div>

        <MayLike category={data[0].category} />
      </PostsPageWrapper>
    </section>
  );
};

export default ShareBar;
