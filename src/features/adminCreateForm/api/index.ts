import { client } from "@/lib/rpc";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetFormData = (tableId: string) => {
  const query = useQuery({
    queryKey: ["createform", tableId],
    queryFn: async () => {
      const res = await client.api.adminform.$get({ query: { tableId } });

      if (!res.ok) throw new Error("Failed to fetch form data");

      return await res.json();
    },
  });

  return query;
};

export const usePostFormData = (tableId: string) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Record<string, unknown>) => {
      const res = await client.api.adminform.$post({
        query: { tableId },
        body: payload,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Failed to post form data: ${res.status} ${text}`);
      }

      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["createform", tableId] });
    },
  });
};
