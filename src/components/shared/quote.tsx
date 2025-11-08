import { ReactNode } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-6 bg-[#F1F4F9] my-8 px-8 py-10">
      <FaQuoteLeft className="flex-shrink-0 text-3xl sm:text-5xl" />
      <p className="font-bold text-lg">{children}</p>
    </div>
  );
};

export default Quote;
