import Link from "next/link";
import React from "react";

export default function BreadCrumbs({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  return (
    <div className="flex mb-4  text-[14px] font-[500] overflow-hidden whitespace-nowrap">
      <Link href="/" className="mr-2">
        Home
      </Link>
      <Link href={`/${category}`} className="mr-2">
        <span className="mr-1">/</span> {category}
      </Link>
      <p className="mr-2 text-[#888888]">
        <span className="mr-1 ">/</span> {title}
      </p>
    </div>
  );
}
