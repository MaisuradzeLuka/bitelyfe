import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const queries = [Query.equal("category", "restaurant"), Query.limit(6)];

  const res = await databases.listDocuments(
    DATABASE_ID,
    POSTSTABLE_ID,
    queries
  );

  const imagesArray = res.documents.map((item) => ({
    id: item.$id,
    image: item.coverimage,
  }));

  return c.json(imagesArray);
});

export default app;
