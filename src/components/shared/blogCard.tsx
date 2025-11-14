import Image from "next/image";
import Link from "next/link";
import { blogCardStyles } from "@/constants/blogCardStyles";
import { BlogCardProps } from "@/types/blogCardTypes";
import { cn, formatDate } from "@/lib/utils";
import HoverTitle from "./hoverTitle";

export default function BlogCard({
  blog,
  variant,
  className,
  imageAspect,
  tagBg,
  hoverTextColor,
  link,
  categoryLink,
}: BlogCardProps) {
  const { $createdAt, title, coverimage, category, summary, $id } = blog;

  const date = formatDate($createdAt);
  const s = blogCardStyles[variant];

  return (
    <div className={cn("gap-5 lg:gap-[30px]  flex", s.wrapper, className)}>
      <Link
        href={link}
        className={`relative flex-shrink-0 ${s.imageWrapper} ${imageAspect}`}
      >
        <Image src={coverimage} alt={title} fill className={s.image} />
      </Link>

      <div className={s.textWrapper}>
        <div className="flex items-center gap-4 mb-3 ">
          <Link href={categoryLink} className={`${s.categoryBg} ${tagBg}`}>
            {category.toUpperCase()}
          </Link>

          <span className="text-sm">{date}</span>
        </div>
        <Link href={link} className="block">
          <HoverTitle
            text={title}
            titleClassname={cn(s.title, hoverTextColor, "cursor-pointer")}
          />
        </Link>

        {summary && <p className={s.description}>{summary}</p>}
      </div>
    </div>
  );
}
