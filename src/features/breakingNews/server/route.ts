import { DATABASE_ID, POSTSTABLE_ID, DRINKSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const lastDayQuery = [
    Query.greaterThanEqual("$createdAt", twentyFourHoursAgo.toISOString()),
    Query.orderDesc("$createdAt"),
  ];

  const fallbackQuery = [Query.orderDesc("$createdAt"), Query.limit(5)];

  const fetchTable = async (tableId: string) => {
    let res = await databases.listDocuments(DATABASE_ID, tableId, lastDayQuery);
    if (res.total === 0) {
      res = await databases.listDocuments(DATABASE_ID, tableId, fallbackQuery);
    }
    return res.documents.map((doc) => ({
      ...doc,
      table: tableId,
    }));
  };

  const [posts, drinks] = await Promise.all([
    fetchTable(POSTSTABLE_ID),
    fetchTable(DRINKSTABLE_ID),
  ]);

  const combined = [...posts, ...drinks].sort(
    (a, b) =>
      new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime()
  );

  const latest = combined.slice(0, 5);

  return c.json({ total: latest.length, documents: latest });
});

export default app;
