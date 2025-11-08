"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useGetNewsList } from "../../api";
import NewsSkeleton from "./newsSkeleton";
import NewsError from "./newsError";

const NewsCarousel = () => {
  const { data, isLoading, isError } = useGetNewsList();

  if (isLoading) return <NewsSkeleton />;
  if (isError || !data) return <NewsError />;

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full overflow-hidden flex justify-between items-center"
    >
      <CarouselContent>
        {data.map((carousel) => (
          <CarouselItem key={carousel.$id}>
            <Link
              href="#"
              className="inline-block truncate max-w-full hover:text-[#007bff] underlineHover"
              title={carousel.title}
            >
              {carousel.title}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden lg:flex gap-2">
        <CarouselPrevious className=" relative top-0 left-0 right-0 bottom-0 translate-0 cursor-pointer" />
        <CarouselNext className="relative top-0 left-0 right-0 bottom-0 translate-0 cursor-pointer" />
      </div>
    </Carousel>
  );
};

export default NewsCarousel;
