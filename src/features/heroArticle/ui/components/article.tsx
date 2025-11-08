"use client";

import { useGetPostsList } from "../../api";
import ErrorComponent from "@/components/shared/errorComponent";
import ArticleSkeleton from "./articleSkeleton";

const Article = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetPostsList(id);

  if (isLoading) return <ArticleSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  return (
    <article>
      <p>{data.content}</p>
    </article>
  );
};

export default Article;
