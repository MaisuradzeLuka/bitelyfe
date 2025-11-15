"use client";

import React from "react";
import CategoryCard from "./categoryCard";
import ErrorComponent from "@/components/shared/errorComponent";
import { useGetTopCategories } from "../../api";

export default function CategoryContainer() {
  const { data, isLoading, isError } = useGetTopCategories();

  if (isLoading) return null;
  if (!data || isError) return <ErrorComponent />;

  return (
    <ul className="w-full  space-y-[10px]">
      {data.map((category) => (
        <li key={category.title}>
          <CategoryCard
            categoryName={category.title}
            count={category.amount}
            tableId={category.tableId}
          />
        </li>
      ))}
    </ul>
  );
}
