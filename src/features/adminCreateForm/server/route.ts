import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";

const app = new Hono()
  .get("/", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const { tableId } = c.req.query();

    const res = await databases.getCollection(DATABASE_ID, tableId);

    const tableData = {
      name: res.name,
      id: res.$id,
      attributes: res.attributes,
    };

    return c.json(tableData);
  })
  .post("/", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const { tableId } = c.req.query();

    try {
      const body = await c.req.json();

      const res = await databases.createDocument(
        DATABASE_ID,
        tableId,
        "unique()",
        {
          ...body,
          coverimage:
            "https://images.unsplash.com/photo-1638688569176-5b6db19f9d2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        }
      );

      return c.json(res, 201);
    } catch (err: any) {
      return c.json({ error: String(err?.message ?? err) }, 500);
    }
  });

export default app;
