import { MainCardProps } from "@/types/mainCardTypes";
import Image from "next/image";
import Link from "next/link";

const MainPostCard = ({
  title,
  image,
  date,
  category,
  height = "h-auto",
  ratio,
  titleClassname,
  link,
}: MainCardProps) => {
  return (
    <div className="relative h-full rounded-md overflow-hidden">
      <Link href={link}>
        <Image
          src={image}
          width={400}
          height={200}
          alt="post image"
          className={`w-full object-cover ${ratio} ${height}`}
        />
      </Link>

      <div className="absolute bottom-0 w-full max-h-[94.5%]  p-6 overflow-auto text-white bg-gradient-to-t from-black to-transparent">
        <div className="mb-4 flex items-center gap-4">
          <Link
            href={link}
            className="rounded-full bg-[#FFE1DF] px-3 py-[2px] text-[13px] font-medium text-[#e34e36] uppercase"
          >
            {category}
          </Link>

          <span className="text-sm">{date}</span>
        </div>

        <Link
          href={link}
          className={`font-semibold underlineHover ${titleClassname}`}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default MainPostCard;
