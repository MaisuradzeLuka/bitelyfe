import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetTopCategories = () => {
  const query = useQuery({
    queryKey: ["topcategories"],
    queryFn: async () => {
      const res = await client.api.topcategories.$get();

      if (!res.ok) throw new Error("Failed to fetch the categories");

      return res.json();
    },
  });

  return query;
};
