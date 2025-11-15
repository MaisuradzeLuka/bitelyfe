"use client";

import Wrapper from "@/components/shared/wrapper";
import SecondaryPosts from "../components/secondaryPosts";
import SectionTitle from "@/components/shared/sectionTitle";
import { useGetPostsList } from "../../api";
import Image from "next/image";
import ErrorComponent from "@/components/shared/errorComponent";
import GallerySkeleton from "../components/gallerySkeleton";

const Gallery = () => {
  const { data, isLoading, isError } = useGetPostsList();

  if (isLoading) return <GallerySkeleton />;
  if (isError || !data) return <ErrorComponent className="max-w-[1400px]" />;

  return (
    <section className="my-8 bg-[#03071E] text-white">
      <Wrapper className="relative grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-3 gap-6 pt-30 pb-16 mx-auto ">
        <SectionTitle
          title="Gallery"
          styles="absolute left-4 sm:left-0 md:left-0 top-18 items-end"
        />

        <div className="lg:col-span-4 xl:col-span-2 ">
          <Image
            width={700}
            height={400}
            src={data[0].image}
            alt="drink image"
            className="object-cover w-full h-full"
          />
        </div>

        <SecondaryPosts images={data} />
      </Wrapper>
    </section>
  );
};

export default Gallery;
