"use client";
import { client } from "@/lib/rpc";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const query = useQuery({
    queryKey: ["homeblogs", "lifestyle"],
    queryFn: async () => {
      const res = await client.api.homeblogs.lifestyle.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};

export const useGetDailyNewsList = () => {
  const query = useQuery({
    queryKey: ["homeblogs", "dailynews"],
    queryFn: async () => {
      const res = await client.api.homeblogs.dailynews.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};

export const useGetTravelNews = (postLimit?: number) => {
  return useQuery({
    queryKey: ["travelnews", postLimit],
    queryFn: async () => {
      const response = await client.api.homeblogs.travelnews.$get({
        limit: postLimit,
      });

      if (!response.ok) throw new Error("Failed to fetch the posts");

      const data = await response.json();
      return data;
    },
  });
};

export const useGetRecentPosts = (limit: number) => {
  return useQuery({
    queryKey: ["recentposts", limit],
    queryFn: async () => {
      const response = await client.api.homeblogs.recentposts.$get({
        query: { limit },
      });

      const data = await response.json();
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
