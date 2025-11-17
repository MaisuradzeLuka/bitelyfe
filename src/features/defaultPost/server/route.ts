import { Query } from "node-appwrite";
import { Hono } from "hono";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DATABASE_ID } from "@/lib/config";

const app = new Hono().get("/defaultpost", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const id = c.req.query("id");
  const tableId = c.req.query("tableId");
  const limitParam = c.req.query("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 100) : 1;

  if (!id) {
    return c.json(
      {
        error: "Missing article id.",
      },
      500
    );
  }

  const queries: string[] = [Query.limit(limit), Query.equal("$id", id)];

  if (!tableId) {
    return c.json(
      {
        error:
          "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
      },
      500
    );
  }

  try {
    const posts = await databases.listDocuments(DATABASE_ID, tableId, queries);
    return c.json(posts.documents);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return c.json({ error: "Failed to fetch posts from database." }, 500);
  }
});

export default app;
