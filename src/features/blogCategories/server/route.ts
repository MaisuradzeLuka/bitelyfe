import { DATABASE_ID, DRINKSTABLE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const category = c.req.query("category");

  if (!category)
    return c.json(
      {
        error: "Missing category.",
      },
      500
    );

  const queries = [
    Query.equal("category", category),
    Query.orderDesc("$createdAt"),
    Query.limit(6),
  ];

  const res = await databases.listDocuments(
    DATABASE_ID,
    DRINKSTABLE_ID,
    queries
  );

  return c.json(res.documents);
});

export default app;
