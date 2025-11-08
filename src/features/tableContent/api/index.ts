import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetTableContent = <T>(tableId: string) => {
  const query = useQuery<T[]>({
    queryKey: ["tablecontent", tableId],
    queryFn: async () => {
      const res = await client.api.tablecontent.$get({ query: { tableId } });

      if (!res.ok) throw new Error("Failed to fetch the table content");

      return res.json() as Promise<T[]>;
    },
  });

  return query;
};
