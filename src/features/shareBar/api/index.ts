import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetShareInfo = (id: string, tableId: string) => {
  return useQuery({
    queryKey: ["sharebar", tableId, id],
    queryFn: async () => {
      const res = await client.api.sharebar[":id"][":tableId"].$get({
        param: { id, tableId },
      });

      if (!res.ok) throw new Error("Failed to fetch post info");
      return res.json();
    },
    enabled: !!id,
  });
};

export const useGetNextPostInfo = (createdAt: string, tableId: string) => {
  return useQuery({
    queryKey: ["sharebar", "nextlinks", tableId, createdAt],
    queryFn: async () => {
      const res = await client.api.sharebar.nextlinks[":tableId"][
        ":createdAt"
      ].$get({
        param: { tableId, createdAt },
      });

      if (!res.ok) throw new Error("Failed to fetch next post info");
      return res.json();
    },
    enabled: !!createdAt && !!tableId,
  });
};

export const useGetMayLikePosts = (category: string, tableId: string) => {
  return useQuery({
    queryKey: ["sharebar", "nextlinks", "maylike", tableId, category],
    queryFn: async () => {
      const res = await client.api.sharebar.category[":category"][
        ":tableId"
      ].$get({
        param: { category, tableId },
      });

      if (!res.ok) throw new Error("Failed to fetch next post info");
      return res.json();
    },
    enabled: !!category,
  });
};
