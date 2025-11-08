import Wrapper from "@/components/shared/wrapper";
import { BsRssFill } from "react-icons/bs";
import NewsCarousel from "../components/newsCarousel";

const BreakingNews = () => {
  return (
    <Wrapper className="w-screen flex items-center gap-4 py-6">
      <div className="flex-shrink-0 flex items-center gap-2 bg-[#FFE1DF] text-black font-semibold py-1 px-1 md:px-3 rounded-sm">
        <BsRssFill className="text-[#E34E36] bg-white rotate-270" />
        <span className="hidden md:inline">Breaking News</span>
      </div>

      <NewsCarousel />
    </Wrapper>
  );
};

export default BreakingNews;
