import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetSibedarList = () => {
  const query = useQuery({
    queryKey: ["adminsidebar"],
    queryFn: async () => {
      const res = await client.api.adminsidebar.$get();

      if (!res.ok) throw new Error("Failed to fetch the news");

      return await res.json();
    },
  });

  return query;
};
