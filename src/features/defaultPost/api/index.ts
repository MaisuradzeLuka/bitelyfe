"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPostById = (tableId: string, id: string) => {
  const query = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      if (!id) throw new Error("Post id is required");

      const response = await client.api.defaultpost.$get({
        query: {
          id,
          tableId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch post from API");
      }

      const data = (await response.json()) as DatabasePost[];
      return data;
    },
    enabled: !!id,
  });

  return query;
};
