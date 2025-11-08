import { formatDate } from "@/lib/utils";
import { MainCardProps } from "@/types/heroSectionTypes";
import Link from "next/link";

const HeroContent = ({ category, date, summary, title, id }: MainCardProps) => {
  return (
    <div className="flex items-center flex-1">
      <div className="text-white h-max ">
        <span className="inline-block bg-[#FFE1DF] text-orange-600 px-3 py-1 rounded-full text-xs font-medium mb-3 uppercase">
          {category}
        </span>

        <span className="text-sm mb-4 ml-4">{formatDate(date)}</span>

        <h2 className="max-w-[600px] text-xl sm:text-4xl font-semibold mb-6 leading-tight tracking-tighter">
          <Link href={`/heroPage/${id}`} className="underlineHover">
            {title}
          </Link>
        </h2>

        <p className="text-xl leading-relaxed max-w-2xl hidden sm:block">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
