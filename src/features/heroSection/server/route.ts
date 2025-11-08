import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const query = [Query.orderDesc("likescount"), Query.limit(5)];

  const res = await databases.listDocuments(DATABASE_ID, POSTSTABLE_ID, query);

  return c.json(res.documents);
});

export default app;
