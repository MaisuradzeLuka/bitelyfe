import { DATABASE_ID, DISHESTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DishesTable } from "@/types/tablesTypes";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/topcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [Query.orderDesc("likescount"), Query.limit(2)];

    const res = await databases.listDocuments<DishesTable>(
      DATABASE_ID,
      DISHESTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/bottomcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");
    const uniqueDishes: DishesTable[] = [];
    const usedCountries = new Set<string>();

    while (uniqueDishes.length < 3) {
      const queries = [Query.orderDesc("likescount"), Query.limit(1)];

      if (usedCountries.size > 0) {
        queries.push(Query.notContains("region", Array.from(usedCountries)));
      }

      const result = await databases.listDocuments<DishesTable>(
        DATABASE_ID,
        DISHESTABLE_ID,
        queries
      );

      if (result.documents.length === 0) break;

      const dish = result.documents[0];
      if (!usedCountries.has(dish.region)) {
        usedCountries.add(dish.region);
        uniqueDishes.push(dish);
      } else {
        break;
      }
    }

    return c.json(uniqueDishes);
  });

export default app;
