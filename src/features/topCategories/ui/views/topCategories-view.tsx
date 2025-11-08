import SectionTitle from "@/components/shared/sectionTitle";
import React from "react";
import CategoryContainer from "../components/categoryContainer";

export default function TopCategories() {
  return (
    <div className="flex flex-col items-start space-y-3">
      <SectionTitle title="Top Categories" />
      <CategoryContainer />
    </div>
  );
}
