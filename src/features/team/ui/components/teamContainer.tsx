"use client";
import React from "react";
import TeamCard from "./teamCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { useGetTeamMembers } from "../../api";

import BlogsSkeleton from "@/features/blogCategories/ui/components/blogsSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

export default function TeamContainer() {
  const {
    data: teamMembers,
    isLoading,
    isError,
  } = useGetTeamMembers({
    sortBy: "$createdAt",
    sortOrder: "asc",
  });

  if (isLoading)
    return (
      <div className="lg:max-w-2/3">
        <BlogsSkeleton />
      </div>
    );
  if (isError || !teamMembers) return <ErrorComponent />;
  return (
    <BlogCardContainer className="m-0 md:grid-cols-2 lg:grid-cols-1">
      {teamMembers.map((card) => (
        <TeamCard
          key={card.name}
          name={card.name}
          description={card.description}
          memberRole={card.memberRole}
          image={card.image}
        />
      ))}
    </BlogCardContainer>
  );
}
