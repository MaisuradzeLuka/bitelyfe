import { DatabasePost } from "@/types/blogCardTypes";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  if (!date) return "";
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

export function getMostCategories(
  posts: DatabasePost[],
  key: keyof DatabasePost,
  limit = 3
): { name: string; count: number }[] {
  const counts: Record<string, number> = {};

  for (const post of posts) {
    const value = post[key];
    if (!value) continue;

    if (Array.isArray(value)) {
      for (const v of value) {
        counts[v] = (counts[v] || 0) + 1;
      }
    } else if (typeof value === "string") {
      counts[value] = (counts[value] || 0) + 1;
    }
  }

  const topCategories = Object.entries(counts)
    .map(([name, count]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);

  return topCategories;
}

export function changeFirstLetter(text: string) {
  const changedText = text.charAt(0).toUpperCase() + text.slice(1);

  return changedText;
}
