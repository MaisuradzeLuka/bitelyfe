import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = (category: string) => {
  const query = useQuery({
    queryKey: ["blogcards", category],
    queryFn: async () => {
      const res = await client.api.blogslist.$get({ query: { category } });

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
