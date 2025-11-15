import Link from "next/link";
import React from "react";

type TopCategoriesType = {
  categoryName: string;
  count: number;
  tableId: string;
};

export default function CategoryCard({
  categoryName,
  count,
  tableId,
}: TopCategoriesType) {
  const linkByTable = tableId.replace("table", "");

  return (
    <Link
      href={`/${linkByTable}/category/${categoryName}`}
      className="flex items-center justify-between 
             bg-[#f1f4f9] p-[15px]
             rounded-sm font-[700] text-[16px] text-black 
             "
    >
      <span>{categoryName}</span>
      <span
        className="bg-[#00000014] size-[30px] text-[#ff607d] 
                       rounded-sm text-center 
                       text-[16px] font-[700] leading-[30px]"
      >
        {count}
      </span>
    </Link>
  );
}
