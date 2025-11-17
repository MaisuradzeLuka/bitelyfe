import {
  DATABASE_ID,
  DRINKSTABLE_ID,
  DISHESTABLE_ID,
  PRODUCTSTABLE_ID,
} from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable, DrinksTable, ProductsTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const lastDayQuery = [
    Query.greaterThanEqual("$createdAt", twentyFourHoursAgo.toISOString()),
    Query.orderDesc("$createdAt"),
  ];

  const fallbackQuery = [Query.orderDesc("$createdAt"), Query.limit(5)];

  const fetchTable = async (tableId: string) => {
    let res = await databases.listDocuments<
      DrinksTable | DishesTable | ProductsTable
    >(DATABASE_ID, tableId, lastDayQuery);
    if (res.total === 0) {
      res = await databases.listDocuments<
        DrinksTable | DishesTable | ProductsTable
      >(DATABASE_ID, tableId, fallbackQuery);
    }
    return res.documents.map((doc) => ({
      ...doc,
      table: tableId,
    }));
  };

  const [posts, drinks, products] = await Promise.all([
    fetchTable(DISHESTABLE_ID),
    fetchTable(DRINKSTABLE_ID),
    fetchTable(PRODUCTSTABLE_ID),
  ]);

  const combined = [...posts, ...drinks, ...products].sort(
    (a, b) =>
      new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime()
  );

  const latest = combined.slice(0, 5);

  return c.json({ total: latest.length, documents: latest });
});

export default app;
