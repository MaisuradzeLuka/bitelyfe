import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/lifestyle", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [
      Query.equal("category", "product"),
      Query.orderDesc("likescount"),
      Query.limit(5),
    ];

    const res = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/dailynews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [Query.orderDesc("$createdAt"), Query.limit(3)];

    const res = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/sportnews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const limitParam = c.req.query("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 100) : 4;

    const queries: string[] = [
      Query.limit(limit),
      Query.equal("section", "jobs"),
    ];

    if (!DATABASE_ID || !POSTSTABLE_ID) {
      return c.json(
        {
          error:
            "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
        },
        500
      );
    }

    try {
      const posts = await databases.listDocuments(
        DATABASE_ID,
        POSTSTABLE_ID,
        queries
      );
      return c.json(posts.documents);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      return c.json({ error: "Failed to fetch posts from database." }, 500);
    }
  })
  .get("/travelnews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const limitParam = c.req.query("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 100) : 3;

    const queries: string[] = [
      Query.limit(limit),
      Query.equal("category", "restaurant"),
      Query.equal("favorite", true),
    ];

    if (!DATABASE_ID || !POSTSTABLE_ID) {
      return c.json(
        {
          error:
            "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
        },
        500
      );
    }

    try {
      const posts = await databases.listDocuments(
        DATABASE_ID,
        POSTSTABLE_ID,
        queries
      );
      return c.json(posts.documents);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      return c.json({ error: "Failed to fetch posts from database." }, 500);
    }
  });

export default app;
