"use client";

import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed right-4 bottom-4 md:right-8 px-1 py-3 md:bottom-8 z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 text-xl text-white bg-[#C4C4C4] hover:bg-[#6d62ff] cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 "
      }`}
    >
      {/* Up Arrow Icon */}
      <FaArrowUpLong />
    </button>
  );
}

