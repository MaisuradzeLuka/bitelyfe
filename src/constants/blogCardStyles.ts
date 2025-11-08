import { BlogCardProps, BlogCardVariantStyles } from "@/types/blogCardTypes";

export const blogCardStyles: Record<
  NonNullable<BlogCardProps["variant"]>,
  BlogCardVariantStyles
> = {
  reverse: {
    wrapper: "flex-col md:flex-row-reverse rounded-[4px]",
    imageWrapper: "md:w-1/2 aspect-[1.43]",
    image: "object-cover rounded-[4px]",
    textWrapper: "px-[35px] py-4 flex flex-col justify-center w-full lg:flex-1",
    categoryBg:
      "bg-[#ffe1df] text-[#e34e36] text-[11px] font-bold rounded-[20px] px-[10px] py-[5px] flex items-center justify-center",
    title: "text-[22px] font-bold tracking-tighter leading-[1.2] sm:mb-3",
    description: "my-3 text-[#888888] line-clamp-3 ",
  },
  horizontal: {
    wrapper: "flex-col md:flex-row rounded-[4px]",
    imageWrapper: "md:w-1/2 aspect-[1.43]",
    image: "object-cover rounded-t-[4px]",
    textWrapper:
      "px-6 md:p-0 md:pr-6 pb-3 flex flex-col justify-center w-full lg:flex-1",
    categoryBg:
      "bg-white text-[#e34e36] text-[11px] font-bold rounded-[20px] px-[10px] py-[5px] flex items-center justify-center",
    title: "text-[22px] font-bold tracking-tighter leading-[1.2] sm:mb-3",
    description: "block my-3 xl:block text-[#888888] line-clamp-3",
  },
  vertical: {
    wrapper: "flex-col",
    imageWrapper: "w-full aspect-[1.43]",
    image: "object-cover rounded-[4px]",
    textWrapper: "flex flex-col justify-center w-full lg:flex-1",
    categoryBg:
      "bg-[#ffe1df] text-[#e34e36] text-[11px] font-bold rounded-[20px] px-[10px] py-[5px] flex items-center justify-center",
    title: "text-[18px] font-bold tracking-tighter leading-[1.2] sm:mb-3",
    description: "hidden  text-[#888888] line-clamp-3",
  },
  blog: {
    wrapper: "flex-col lg:flex-row",
    imageWrapper:
      "w-full aspect-[1.43] lg:w-[240px] lg:aspect-[1.43] xl:w-1/2 xl:aspect-[1.58]",
    image: "object-cover rounded-[4px]",
    textWrapper: "flex flex-col justify-center w-full lg:flex-1",
    categoryBg:
      "bg-[#ffe1df] text-[#e34e36] text-[11px] font-bold rounded-[20px] px-[10px] py-[5px] flex items-center justify-center",
    title: "text-[22px] font-bold tracking-tighter leading-[1.2] sm:mb-3",
    description: " hidden xl:block my-3 text-[#888888] line-clamp-3",
  },
};
