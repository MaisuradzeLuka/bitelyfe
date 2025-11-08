import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetShareInfo = (id: string) => {
  return useQuery({
    queryKey: ["sharebar", id],
    queryFn: async () => {
      const res = await client.api.sharebar[":id"].$get({ param: { id } });

      if (!res.ok) throw new Error("Failed to fetch post info");
      return res.json();
    },
    enabled: !!id,
  });
};

export const useGetNextPostInfo = (createdAt: string) => {
  return useQuery({
    queryKey: ["sharebar", "nextlinks", createdAt],
    queryFn: async () => {
      const res = await client.api.sharebar.nextlinks[":createdAt"].$get({
        param: { createdAt: String(createdAt) },
      });

      if (!res.ok) throw new Error("Failed to fetch next post info");
      return res.json();
    },
    enabled: !!createdAt,
  });
};
