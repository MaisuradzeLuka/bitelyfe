import { DATABASE_ID, DRINKSTABLE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/:id", appwriteMiddleware, async (c) => {
    const id = c.req.param("id");

    const database = c.get("databases");

    const queries = [Query.limit(1), Query.equal("$id", [id])];

    const res = await database.listDocuments(
      DATABASE_ID,
      DRINKSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/nextlinks/:createdAt", appwriteMiddleware, async (c) => {
    const createdAt = c.req.param("createdAt");

    const database = c.get("databases");

    const olderQueries = [
      Query.lessThan("$createdAt", createdAt),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const olderRes = await database.listDocuments(
      DATABASE_ID,
      DRINKSTABLE_ID,
      olderQueries
    );

    const newerQueries = [
      Query.greaterThan("$createdAt", createdAt),
      Query.orderAsc("$createdAt"),
      Query.limit(1),
    ];

    const newerRes = await database.listDocuments(
      DATABASE_ID,
      DRINKSTABLE_ID,
      newerQueries
    );

    const nextLinks = [
      olderRes.documents[0] ?? null,
      newerRes.documents[0] ?? null,
    ];

    return c.json(nextLinks);
  })

  .get("/category/:category", appwriteMiddleware, async (c) => {
    const category = c.req.param("category");

    const database = c.get("databases");

    const queries = [Query.limit(4), Query.equal("category", category)];

    const res = await database.listDocuments(
      DATABASE_ID,
      DRINKSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  });

export default app;
