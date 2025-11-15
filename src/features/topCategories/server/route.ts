import { DATABASE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const attributes = new Set<string>();
  const categories: { title: string; amount: number; tableId: string }[] = [];

  const { collections: tables } = await databases.listCollections(DATABASE_ID);

  for (const table of tables) {
    for (const attribute of table.attributes) {
      if (attribute.key === "category" && "elements" in attribute) {
        for (const elem of attribute.elements as string[]) {
          attributes.add(elem);
        }
      }
    }
  }

  const tasks = [];

  for (const table of tables) {
    for (const attribute of attributes) {
      tasks.push(
        (async () => {
          const res = await databases.listDocuments(DATABASE_ID, table.$id, [
            Query.equal("category", attribute),
            Query.limit(1),
          ]);

          if (res.total > 0) {
            categories.push({
              title: attribute,
              amount: res.total,
              tableId: table.$id,
            });
          }
        })()
      );
    }
  }

  await Promise.all(tasks);

  categories.sort((a, b) => b.amount - a.amount);

  const topCategories = categories.slice(0, 3);

  return c.json(topCategories);
});

export default app;
