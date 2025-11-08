import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
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
      "drinsktable",
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
      "drinsktable",
      olderQueries
    );

    const newerQueries = [
      Query.greaterThan("$createdAt", createdAt),
      Query.orderAsc("$createdAt"),
      Query.limit(1),
    ];

    const newerRes = await database.listDocuments(
      DATABASE_ID,
      "drinsktable",
      newerQueries
    );

    const nextLinks = [
      olderRes.documents[0] ?? null,
      newerRes.documents[0] ?? null,
    ];

    return c.json(nextLinks);
  });

export default app;
