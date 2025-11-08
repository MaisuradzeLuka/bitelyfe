import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const queries = [Query.limit(4)];

  const res = await databases.listDocuments(
    DATABASE_ID,
    "drinsktable",
    queries
  );

  return c.json(res.documents);
});

export default app;
