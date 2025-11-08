"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NotFoundImage from "../components/not-fount-img";

export default function NotFoundView({ url }: { url: string }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-12"
    >
      <NotFoundImage />

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center md:text-left max-w-md"
      >
        <p className="text-[#a86eee] font-semibold text-center md:text-left tracking-tighter mb-[30px] text-[32px] leading-[36px] lg:mb-[45px] lg:text-[50px] lg:leading-[54px]">
          We can’t find the page you’re looking for.
          <br />
          <span className="font-medium text-xl md:text-2xl text-gray-600">
            Maybe it’s lost in the kitchen 🍳
          </span>
        </p>

        <Button
          asChild
          className="inline-flex items-center bg-[#f47663] text-white font-semibold text-sm leading-none tracking-wide rounded-md px-[30px] py-[18px] shadow-md transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 hover:bg-[#9469c9] cursor-pointer"
        >
          <Link href={url}>
            <span>Back to Homepage</span>
            <span className="ml-2 text-[9px] leading-none ">→</span>
          </Link>
        </Button>
      </motion.div>
    </motion.main>
  );
}
