"use client";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";
import { useQuery } from "@tanstack/react-query";

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

export const useGetSportNews = (postLimit?: number) => {
  return useQuery({
    queryKey: ["sportNews", postLimit],
    queryFn: async () => {
      const response = await client.api.homeblogs.sportnews.$get({
        limit: postLimit,
      });

      const data = await response.json();
      return data as DatabasePost[];
    },
  });
};

export const useGetTravelNews = (postLimit?: number) => {
  return useQuery({
    queryKey: ["travelnews", postLimit],
    queryFn: async () => {
      const response = await client.api.homeblogs.travelnews.$get({
        limit: postLimit,
      });

      const data = await response.json();
      return data as DatabasePost[];
    },
  });
};
