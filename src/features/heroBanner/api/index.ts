import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetHeroBanner = (id: string) => {
  const query = useQuery({
    queryKey: ["herobanner", id],
    queryFn: async () => {
      const res = await client.api.herobanner[":id"].$get({ param: { id } });

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
