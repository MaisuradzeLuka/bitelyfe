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

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const fetchDocuments = async (tableId: string) => {
    const res = await databases.listDocuments<
      DrinksTable | DishesTable | ProductsTable
    >(DATABASE_ID, tableId, [Query.orderDesc("likescount"), Query.limit(3)]);

    return res.documents;
  };

  const drinks = await fetchDocuments(DRINKSTABLE_ID);
  const dishes = await fetchDocuments(DISHESTABLE_ID);
  const products = await fetchDocuments(PRODUCTSTABLE_ID);

  const imagesArray = [...drinks, ...dishes, ...products].map((item) => ({
    id: item.$id,
    image: item.coverimage,
  }));

  return c.json(imagesArray);
});

export default app;
