import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable, DrinksTable, ProductsTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/nextlinks/:tableId/:createdAt", appwriteMiddleware, async (c) => {
    const tableId = c.req.param("tableId");
    const createdAt = c.req.param("createdAt");

    if (!tableId || !createdAt) {
      return c.json({ error: "Missing tableId or createdAt" }, 400);
    }

    const database = c.get("databases");

    const olderQueries = [
      Query.lessThan("$createdAt", createdAt),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const olderRes = await database.listDocuments<
      DrinksTable | DishesTable | ProductsTable
    >(DATABASE_ID, tableId, olderQueries);

    const newerQueries = [
      Query.greaterThan("$createdAt", createdAt),
      Query.orderAsc("$createdAt"),
      Query.limit(1),
    ];

    const newerRes = await database.listDocuments<
      DrinksTable | DishesTable | ProductsTable
    >(DATABASE_ID, tableId, newerQueries);

    const nextLinks = [
      olderRes.documents[0] ?? null,
      newerRes.documents[0] ?? null,
    ];

    return c.json(nextLinks);
  })

  .get("/:id/:tableId", appwriteMiddleware, async (c) => {
    const id = c.req.param("id");
    const tableId = c.req.param("tableId");

    if (!id || !tableId) {
      return c.json({ error: "Missing id or tableId" }, 400);
    }

    const database = c.get("databases");

    const queries = [Query.limit(1), Query.equal("$id", [id])];

    const res = await database.listDocuments(DATABASE_ID, tableId, queries);

    return c.json(res.documents);
  })

  .get("/category/:category/:tableId", appwriteMiddleware, async (c) => {
    const category = c.req.param("category");
    const tableId = c.req.param("tableId");

    if (!category || !tableId) {
      return c.json({ error: "Missing category or tableId" }, 400);
    }

    const database = c.get("databases");

    const queries = [Query.limit(4), Query.equal("category", category)];

    const res = await database.listDocuments<
      DrinksTable | DishesTable | ProductsTable
    >(DATABASE_ID, tableId, queries);

    return c.json(res.documents);
  });

export default app;
