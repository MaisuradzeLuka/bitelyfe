"use client";

import { motion } from "framer-motion";
import BannerContent from "../components/bannerContent";
import { useGetHeroBanner } from "../../api";
import { HeroBannerProps } from "@/types/heroBannerTypes";
import HeroBannerSkeleton from "../components/heroBannerSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const HeroBanner = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetHeroBanner(id);

  if (isLoading) return <HeroBannerSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  return (
    <section className="relative w-full flex flex-col-reverse overflow-hidden">
      <motion.div
        className="w-full inset-0 bg-cover bg-center aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5]"
        initial={{ scale: 0.76, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originY: 0, backgroundImage: `url(${data.coverimage})` }}
      />

      <div className="hidden lg:block absolute w-full h-full bg-black/30" />

      <BannerContent {...(data as unknown as HeroBannerProps)} />
    </section>
  );
};

export default HeroBanner;
