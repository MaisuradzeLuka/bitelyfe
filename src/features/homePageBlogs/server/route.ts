import {
  DATABASE_ID,
  DISHESTABLE_ID,
  DRINKSTABLE_ID,
  POSTSTABLE_ID,
} from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable, DrinksTable } from "@/types/tablesTypes";
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

    const { collections } = await databases.listCollections(DATABASE_ID);

    let allPosts: any[] = [];

    for (const table of collections) {
      try {
        const res = await databases.listDocuments(DATABASE_ID, table.$id, [
          Query.orderDesc("$createdAt"),
        ]);

        allPosts.push(
          ...res.documents.map((doc) => ({
            ...doc,
            tableId: table.$id,
            tableName: table.name,
          }))
        );
      } catch (err) {
        console.warn(`Skipping collection ${table.$id}`);
      }
    }

    const sorted = allPosts.sort(
      (a, b) =>
        new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime()
    );

    return c.json(sorted.slice(0, 3));
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
  })
  .get("/recentposts", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const limit = c.req.query("limit") || 6;

    const fetchDocuments = async (tableId: string) => {
      const queries = [Query.orderDesc("$createdAt"), Query.limit(+limit / 2)];

      const res = await databases.listDocuments<DrinksTable | DishesTable>(
        DATABASE_ID,
        tableId,
        queries
      );

      return res.documents;
    };

    const drinks = await fetchDocuments(DRINKSTABLE_ID);
    const dishes = await fetchDocuments(DISHESTABLE_ID);

    const merged = [...drinks, ...dishes].sort((a, b) =>
      a.$createdAt < b.$createdAt ? 1 : -1
    );

    return c.json(merged);
  });

export default app;
