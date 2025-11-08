"use client";
import ErrorComponent from "@/components/shared/errorComponent";
import SecondaryPosts from "@/features/gallery/ui/components/secondaryPosts";

import { useGetPostsList } from "@/features/gallery/api";
import FaqSkeleton from "@/features/gallery/ui/components/faqSkeleton";

export default function FaqGallery() {
  const { data, isLoading, isError } = useGetPostsList();

  if (isLoading) return <FaqSkeleton />;
  if (isError || !data) return <ErrorComponent className="h-[600px]" />;
  return <SecondaryPosts images={data as unknown as []} />;
}
