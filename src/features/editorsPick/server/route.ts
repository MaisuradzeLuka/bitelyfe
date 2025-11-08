import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/topcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const restaurantQueries = [
      Query.equal("category", "restaurant"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const restaurant = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      restaurantQueries
    );

    const dishQueries = [
      Query.equal("category", "dish"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const dish = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      dishQueries
    );

    const newestRestaurant = restaurant.documents[0] || null;
    const newestDish = dish.documents[0] || null;

    return c.json([newestRestaurant, newestDish]);
  })
  .get("/bottomcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");
    const uniqueDishes = [];
    const usedCountries = new Set<string>();

    while (uniqueDishes.length < 3) {
      const queries = [
        Query.equal("category", "dish"),
        Query.orderDesc("likescount"),
        Query.limit(1),
      ];

      for (const country of usedCountries) {
        queries.push(Query.notEqual("country", country));
      }

      const result = await databases.listDocuments(
        DATABASE_ID,
        POSTSTABLE_ID,
        queries
      );

      if (result.documents.length === 0) break;

      const dish = result.documents[0];
      if (!usedCountries.has(dish.country)) {
        usedCountries.add(dish.country);
        uniqueDishes.push(dish);
      } else {
        break;
      }
    }

    return c.json(uniqueDishes);
  });

export default app;
