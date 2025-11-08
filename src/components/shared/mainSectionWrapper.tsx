import React, { ReactNode } from "react";

export default function MainSectionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full  px-[15px] sm:px-[0] md:px-[15px] 2xl:px-0  lg:col-span-2">
      {children}
    </div>
  );
}
