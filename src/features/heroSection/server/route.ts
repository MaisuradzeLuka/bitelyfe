import { DATABASE_ID, POSTSTABLE_ID, DRINKSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { GeneralHeroSectionTypes } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const TABLE_IDS = [POSTSTABLE_ID, DRINKSTABLE_ID];

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");
  const topLikesQuery = [Query.orderDesc("likescount"), Query.limit(5)];

  const fetchTable = async (tableId: string) => {
    try {
      const res = await databases.listDocuments<GeneralHeroSectionTypes>(
        DATABASE_ID,
        tableId,
        topLikesQuery
      );
      return res.documents.map((doc) => ({ ...doc, tableId }));
    } catch {
      return [];
    }
  };

  const results = await Promise.all(TABLE_IDS.map(fetchTable));

  const combined = results
    .flat()
    .sort((a, b) => (b.likescount ?? 0) - (a.likescount ?? 0))
    .slice(0, 5);

  return c.json(combined);
});

export default app;
