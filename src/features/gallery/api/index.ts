import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const query = useQuery({
    queryKey: ["restaurants"],
    queryFn: async () => {
      const res = await client.api.restaurants.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
