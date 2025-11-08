import { ReactNode } from "react";

const PostsPageWrapper = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={`w-full sm:w-[510px] md:w-[690px] lg:w-[610px] xl:w-[730px] 2xl:w-[820px] mx-auto px-4 ${classname}`}
    >
      {children}
    </div>
  );
};

export default PostsPageWrapper;
