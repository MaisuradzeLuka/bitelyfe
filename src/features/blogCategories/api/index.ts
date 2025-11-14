import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = (tableId: string, category?: string) => {
  const query = useQuery({
    queryKey: ["blogcards", category ?? "all"],
    queryFn: async () => {
      const queryObj: Record<string, string> = {};
      if (category) queryObj.category = category;

      const res = await client.api.blogslist.$get({
        query: { tableId, ...queryObj },
      });

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
