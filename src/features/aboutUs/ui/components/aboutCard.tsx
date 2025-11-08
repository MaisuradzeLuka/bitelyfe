// components/about/AboutCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface AboutCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function AboutCard({
  image,
  tag,
  title,
  description,
  linkText,
  linkHref,
}: AboutCardProps) {
  return (
    <div className="relative rounded-md overflow-hidden">
      <div className="relative aspect-[1.8]">
        <Image src={image} fill alt={title} className="object-cover" />
      </div>

      <div className="absolute bottom-0 w-full max-h-[94.5%] p-3 sm:p-6  text-white bg-gradient-to-t from-black to-transparent">
        <div className="sm:mb-4 flex flex-col justify-center sm:gap-2 md:gap-4">
          <span className="text-sm opacity-80">{tag}</span>
          <h3>{title}</h3>
          <p className="font-semibold line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>

        <Link href={linkHref} className="font-semibold underlineHover">
          {linkText}
          <span>
            <FaArrowRightLong className="inline ml-2" />
          </span>
        </Link>
      </div>
    </div>
  );
}
