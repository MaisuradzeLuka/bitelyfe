import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetTopCardsList = () => {
  const query = useQuery({
    queryKey: ["editorspick", "topcards"],
    queryFn: async () => {
      const res = await client.api.editorspick.topcards.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};

export const useGetBottomCardsList = () => {
  const query = useQuery({
    queryKey: ["editorspick", "bottomcards"],
    queryFn: async () => {
      const res = await client.api.editorspick.bottomcards.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
