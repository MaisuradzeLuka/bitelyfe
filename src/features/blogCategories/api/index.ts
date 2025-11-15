import { client } from "@/lib/rpc";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetBlogs = (
  tableId: string,
  limit: number,
  category?: string
) => {
  const query = useQuery({
    queryKey: ["blogcards", tableId, limit, category ?? "all"],
    queryFn: async () => {
      const queryObj: Record<string, string> = {};
      if (category) queryObj.category = category;

      const res = await client.api.blogslist.$get({
        query: { tableId, limit, ...queryObj },
      });

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
    placeholderData: keepPreviousData,
  });

  return query;
};
