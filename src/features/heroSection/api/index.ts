import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const query = useQuery({
    queryKey: ["herosection"],
    queryFn: async () => {
      const res = await client.api.herosection.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
