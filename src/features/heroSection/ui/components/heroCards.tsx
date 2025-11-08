import { HeroCardsType } from "@/types/heroSectionTypes";
import Image from "next/image";
import Link from "next/link";

const HeroCards = ({ cards }: HeroCardsType) => {
  return (
    <ul className="hidden md:grid grid-cols-2 xl:grid-cols-4 overflow-hidden gap-7">
      {cards.map((card, index) => (
        <li
          key={card.$id}
          className={`h-max bg-white/20 backdrop-blur-md rounded-sm flex items-center gap-4 px-2 py-3 ${
            index > 1 ? "hidden xl:flex" : ""
          }`}
        >
          <Link href={`/heroPage/${card.$id}`} className="flex-shrink-0">
            <Image
              src={card.coverimage}
              alt="card image"
              width={70}
              height={70}
              className="w-18 h-18 rounded-full object-cover"
            />
          </Link>

          <Link
            href={`/heroPage/${card.$id}`}
            className=" text-white text-[15px] font-bold leading-5 line-clamp-3"
          >
            <p className="inline underlineHover ">{card.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeroCards;
