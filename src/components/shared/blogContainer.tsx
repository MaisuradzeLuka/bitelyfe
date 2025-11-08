import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BlogCardWrapperProps = {
  children: ReactNode;
  className?: string;
  categoryTitle?: string;
};

export default function BlogCardContainer({
  children,
  className,
  categoryTitle,
}: BlogCardWrapperProps) {
  return (
    <div className="mx-auto  lg:px-0  xl:mx-0 2xl:px-[15px]">
      {categoryTitle && (
        <div className="mb-[15px]">
          <h4 className="mx-auto font-[700] text-[22px] bg-transparent relative sm:ml-4 md:ml-0 after:w-[14px] after:h-[3px] after:bg-[#6d62ff]  after:ml-[10px] content-[''] after:inline-flex after:skew-x-[-45deg]">
            {categoryTitle}
          </h4>
        </div>
      )}
      <div
        className={cn(
          "mb-[30px] mx-auto  grid grid-cols-1  2xl:w-[824px] xl:w-[730px] lg:w-[610px] md:w-[690px] sm:w-[510px] max-sm:max-w-[530px] max-sm:w-full [&>*]:h-auto gap-x-[30px] gap-y-[30px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
