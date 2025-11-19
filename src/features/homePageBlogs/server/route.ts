import {
  DATABASE_ID,
  DISHESTABLE_ID,
  DRINKSTABLE_ID,
  PRODUCTSTABLE_ID,
} from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable, DrinksTable, ProductsTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/lifestyle", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [Query.orderDesc("likescount"), Query.limit(5)];

    const res = await databases.listDocuments<ProductsTable>(
      DATABASE_ID,
      PRODUCTSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/dailynews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const fetchDocuments = async (tableId: string) => {
      const queries = [Query.orderDesc("$createdAt"), Query.limit(3)];

      const res = await databases.listDocuments<
        DrinksTable | DishesTable | ProductsTable
      >(DATABASE_ID, tableId, queries);

      return res.documents.map((doc) => ({
        ...doc,
        tableId,
      }));
    };

    const drinks = await fetchDocuments(DRINKSTABLE_ID);
    const dishes = await fetchDocuments(DISHESTABLE_ID);
    const products = await fetchDocuments(PRODUCTSTABLE_ID);

    const merged = [...drinks, ...dishes, ...products].sort((a, b) =>
      a.$createdAt < b.$createdAt ? 1 : -1
    );
    const sorted = merged
      .sort(
        (a, b) =>
          new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime()
      )
      .slice(0, 3);

    return c.json(sorted);
  })
  .get("/travelnews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const limitParam = c.req.query("limit");
    const limit = limitParam ? Math.min(Number(limitParam), 100) : 3;

    const queries: string[] = [Query.limit(limit)];

    if (!DATABASE_ID) {
      return c.json(
        {
          error:
            "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
        },
        500
      );
    }

    try {
      const posts = await databases.listDocuments<ProductsTable>(
        DATABASE_ID,
        PRODUCTSTABLE_ID,
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
      const queries = [Query.orderDesc("$createdAt"), Query.limit(+limit / 3)];

      const res = await databases.listDocuments<
        DrinksTable | DishesTable | ProductsTable
      >(DATABASE_ID, tableId, queries);

      return res.documents.map((doc) => ({
        ...doc,
        tableId,
      }));
    };

    const drinks = await fetchDocuments(DRINKSTABLE_ID);
    const dishes = await fetchDocuments(DISHESTABLE_ID);
    const products = await fetchDocuments(PRODUCTSTABLE_ID);

    const merged = [...drinks, ...dishes, ...products].sort((a, b) =>
      a.$createdAt < b.$createdAt ? 1 : -1
    );

    return c.json(merged);
  });

export default app;
