import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
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

  let res = await databases.listDocuments(
    DATABASE_ID,
    POSTSTABLE_ID,
    lastDayQuery
  );

  if (res.total === 0) {
    const fallbackQuery = [Query.orderDesc("$createdAt"), Query.limit(5)];
    res = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      fallbackQuery
    );
  }

  return c.json(res);
});

export default app;
