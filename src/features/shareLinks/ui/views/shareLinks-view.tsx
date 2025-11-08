import { FaRegShareSquare } from "react-icons/fa";
import ShareLinksCards from "../components/shareLinks";
import { Props } from "@/types/shareLinksTypes";

const ShareLinks = ({ flexDirection, theme }: Props) => {
  return (
    <div
      className={`h-full flex ${flexDirection} items-center justify-center sm:justify-between gap-4`}
    >
      <div
        className={`hidden w-max sm:flex ${flexDirection} items-center gap-3 text-[#000000]`}
      >
        <FaRegShareSquare className="w-[22px] h-[22px]" />
        <span className="text-[16px] font-bold">Share</span>
      </div>

      <ShareLinksCards flexDirection={flexDirection} theme={theme} />
    </div>
  );
};

export default ShareLinks;
