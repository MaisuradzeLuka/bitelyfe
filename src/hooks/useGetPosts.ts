"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PostFilters } from "@/types/postTypes";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPosts = (tableId: string, filters?: PostFilters) => {
  const {
    category,
    status,
    author,
    tag,
    limit,
    sortBy,
    sortOrder,
    section,
    queryKeyName,
  } = filters || {};
  const resolvedLimit = limit ?? 1000;

  const query = useQuery({
    queryKey: [
      queryKeyName ?? "posts",
      {
        category: category ?? null,
        status: status ?? null,
        author: author ?? null,
        tag: tag ?? null,
        limit: resolvedLimit,
        sortBy: sortBy ?? null,
        sortOrder: sortOrder ?? null,
        section: section ?? null,
      },
    ],
    queryFn: async () => {
      const query = {
        ...(category ? { category } : {}),
        ...(status ? { status } : {}),
        ...(author ? { author } : {}),
        ...(tag ? { tag } : {}),
        ...(sortBy ? { sortBy } : {}),
        ...(sortOrder ? { sortOrder } : {}),
        ...(section ? { section } : {}),
        limit: limit ? String(resolvedLimit) : undefined,
      };

      const response = await client.api.posts.$get({
        query,
        tableId,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch posts from api");
      }

      const data = await response.json();
      return data as DatabasePost[];
    },
    placeholderData: keepPreviousData,
    staleTime: queryKeyName === "posts" ? 0 : undefined,
    gcTime: queryKeyName === "posts" ? 0 : undefined,
    refetchOnMount: queryKeyName === "posts" ? "always" : false,
  });

  return query;
};
