import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = (id: string) => {
  const query = useQuery({
    queryKey: ["heroarticle", id],
    queryFn: async () => {
      const res = await client.api.heroarticle[":id"].$get({ param: { id } });

      if (!res.ok) throw new Error("Failed to fetch the post");

      return res.json();
    },
  });

  return query;
};
