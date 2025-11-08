import React from "react";
import { UserRound } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { FaRegClock } from "react-icons/fa";

type DefaultPostIntroType = {
  title: string;
  description: string;
  created_at: string;
  readTime: number;
};

export default function DefaultPostIntro({
  title,
  description,
  created_at,
  readTime,
}: DefaultPostIntroType) {
  const formattedDate = formatDate(created_at);
  return (
    <>
      <h1 className="text-[38px] font-[1000] leading-[1.2] tracking-[-0.06rem]">
        {title}
      </h1>
      <p className="my-4 text-[#333333] text-[17px] leading-[1.55]! line-clamp-2 ">
        {description} Donec facilisis leo et bibendum pretium. Suspendisse
        ligula neque, ultrices nec interdum faucibus, pharetra et
      </p>
      <div className="flex justify-between mb-[30px]">
        <div className="flex gap-2">
          <div className="flex size-6 justify-center items-center bg-amber-100 rounded-full ">
            <UserRound className="text-[#8c92e8]" />
          </div>
          <p className="font-[700]">John Doe</p>
          <p className="mx-1">-</p>
          <p>{formattedDate}</p>
        </div>
        <div className=" gap-2 text-[15px] hidden sm:flex items-center">
          <FaRegClock className="inline " />
          <div className="">{readTime} min</div>
        </div>
      </div>
    </>
  );
}
