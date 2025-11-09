import { Hono } from "hono";
import { handle } from "hono/vercel";

import editorsPick from "@/features/editorsPick/server/route";
import heroSection from "@/features/heroSection/server/route";
import homeBlogs from "@/features/homePageBlogs/server/route";
import breakingNews from "@/features/breakingNews/server/route";
import topDrinks from "@/features/dontMiss/server/route";
import restaurants from "@/features/gallery/server/route";
import defaultPost from "@/features/defaultPost/server/route";
import heroBanner from "@/features/heroBanner/server/route";
import heroArticle from "@/features/heroArticle/server/route";
import shareBar from "@/features/shareBar/server/route";
import adminSidebar from "@/features/adminSidebar/server/route";
import tableContent from "@/features/tableContent/server/route";
import adminForm from "@/features/adminCreateForm/server/route";
import blogsList from "@/features/blogCategories/server/route";
import posts from "@/app/api/[[...route]]/posts";

const app = new Hono().basePath("/api");

const routes = app
  .route("/breakingnews", breakingNews)
  .route("/editorspick", editorsPick)
  .route("/herosection", heroSection)
  .route("/homeblogs", homeBlogs)
  .route("/topdrinks", topDrinks)
  .route("/restaurants", restaurants)
  .route("/herobanner", heroBanner)
  .route("/heroarticle", heroArticle)
  .route("/sharebar", shareBar)
  .route("/adminsidebar", adminSidebar)
  .route("/adminform", adminForm)
  .route("/tablecontent", tableContent)
  .route("/blogslist", blogsList)
  .route("/", defaultPost)
  .route("/", posts);

export type AppType = typeof routes;
export const GET = handle(routes);
export const POST = handle(routes);
