import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/:id", appwriteMiddleware, async (c) => {
  const { id } = c.req.param();

  const databases = c.get("databases");

  const queries = [Query.equal("$id", id)];

  const res = await databases.listDocuments(
    DATABASE_ID,
    POSTSTABLE_ID,
    queries
  );

  return c.json(res.documents[0]);
});

export default app;
