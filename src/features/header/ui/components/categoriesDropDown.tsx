"use client";
import { useGetPosts } from "@/hooks/useGetPosts";
import { getMostCategories } from "@/lib/utils";
import DropDownItem from "./dropDownItem";
import SubmenuItem from "./submenuItem";

export default function CategoriesDropDown({
  variant,
}: {
  variant: "mobile" | "desktop";
}) {
  const { data: posts, isError } = useGetPosts({
    queryKeyName: "allPosts",
    limit: 1000,
  });

  if (!posts || isError) return null;
  const categories = getMostCategories(posts, "category");
  const blogMenu = {
    id: "blog",
    title: "Blog",
    children: categories.map((cat) => ({
      id: cat.name,
      title: cat.name,
      children: [],
      href: `/blog/category/${cat.name}`,
    })),
  };
  return (
    <li className={variant === "desktop" ? "h-full mr-2" : ""}>
      {variant === "desktop" ? (
        <DropDownItem {...blogMenu} />
      ) : (
        <SubmenuItem {...blogMenu} />
      )}
    </li>
  );
}
