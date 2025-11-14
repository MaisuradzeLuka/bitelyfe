import { DATABASE_ID, DRINKSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DrinksTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const queries = [Query.limit(4)];

  const res = await databases.listDocuments<DrinksTable>(
    DATABASE_ID,
    DRINKSTABLE_ID,
    queries
  );

  return c.json(res.documents);
});

export default app;
