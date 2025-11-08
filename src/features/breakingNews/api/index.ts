import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetNewsList = () => {
  const query = useQuery({
    queryKey: ["breakingnews"],
    queryFn: async () => {
      const res = await client.api.breakingnews.$get();

      if (!res.ok) throw new Error("Failed to fetch the news");

      return (await res.json()).documents;
    },
  });

  return query;
};
