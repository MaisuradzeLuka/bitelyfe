import Image from "next/image";

import { cn } from "@/lib/utils";

import HoverTitle from "@/components/shared/hoverTitle";

type TeamCard = {
  name: string;
  description: string;
  memberRole: string;
  image: string;
  className?: string;
};

export default function TeamCard({
  name,
  className,
  image,
  description,
  memberRole,
}: TeamCard) {
  const memberTitle = `${name} - The ${memberRole} `;
  return (
    <div
      className={cn("gap-5 lg:gap-[30px] flex flex-col lg:flex-row", className)}
    >
      <div
        className={cn(
          "relative flex-shrink-0 w-full aspect-[1.58] lg:w-[240px]  xl:w-1/2 "
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-[4px]"
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:flex-1">
        <HoverTitle
          text={memberTitle}
          titleClassname={cn(
            "text-[22px] font-bold tracking-tighter leading-[1.2] sm:mb-3 cursor-pointer"
          )}
        />

        <p className=" my-3 text-[#333] line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
