import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const res = await databases.listCollections(DATABASE_ID);

  const tablesData = res.collections.map((collection) => ({
    name: collection.name,
    id: collection.$id,
    link: `/admin/tables/${collection.$id}`,
  }));

  return c.json(tablesData);
});

export default app;
