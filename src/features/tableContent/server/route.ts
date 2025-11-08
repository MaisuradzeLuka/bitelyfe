import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const { tableId } = c.req.query();

  const res = await databases.listDocuments(DATABASE_ID, tableId);

  return c.json(res.documents);
});

export default app;
