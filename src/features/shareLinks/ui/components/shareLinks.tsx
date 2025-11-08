import { shareLinksData } from "@/constants/shareLinks";
import { Props } from "@/types/shareLinksTypes";
import Link from "next/link";

const ShareLinksCards = ({ flexDirection, theme }: Props) => {
  return (
    <ul className={`flex ${flexDirection} items-center justify-center gap-2`}>
      {shareLinksData.map((link) => (
        <li key={link.id}>
          <Link
            href={link.id}
            className={` flex items-center justify-center rounded-full hover:opacity-80 transition-opacity duration-300 ease-in ${
              theme === "light"
                ? "rounded-full w-[37px] h-[37px] shadow-[0_0_6px_rgba(0,0,0,0.1)]"
                : "rounded-xs w-[32px] h-[32px]"
            }`}
            style={
              theme === "light"
                ? { backgroundColor: "#FFFFFF" }
                : { backgroundColor: link.color }
            }
          >
            <link.icon
              className="w-1/2 h-1/2"
              style={
                theme === "light" ? { color: link.color } : { color: "#FFFFFF" }
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShareLinksCards;
