"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundImage() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-shrink-0 mb-12 md:mb-0 w-full md:w-1/2 md:pr-4 lg:pr-8"
    >
      <Image
        src="/404-page.png"
        alt="404 Not Found Illustration"
        width={600}
        height={600}
        className="max-w-full h-auto"
        priority
      />
    </motion.div>
  );
}
