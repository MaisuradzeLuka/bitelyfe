import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable, DrinksTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const category = c.req.query("category");
  const tableId = c.req.query("tableId");

  if (!tableId) {
    return c.json({ message: "tableId is required" }, 400);
  }

  const queries = [
    ...(category ? [Query.equal("category", category)] : []),
    Query.orderDesc("$createdAt"),
    Query.limit(6),
  ];

  console.log(tableId);

  const res = await databases.listDocuments<DrinksTable | DishesTable>(
    DATABASE_ID,
    tableId,
    queries
  );

  return c.json(res.documents);
});

export default app;
