"use client";
import { client } from "@/lib/rpc";
import { TeamFilters } from "@/types/teamTypes";

import { useQuery } from "@tanstack/react-query";

export const useGetTeamMembers = (filters?: TeamFilters) => {
  const { sortBy, sortOrder } = filters || {};
  const query = useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      const query = {
        sortBy: sortBy ?? null,
        sortOrder: sortOrder ?? null,
      };
      const res = await client.api.team.$get({ query });

      if (!res.ok) throw new Error("Failed to fetch the posts");
      const data = await res.json();
      return data;
    },
  });

  return query;
};
