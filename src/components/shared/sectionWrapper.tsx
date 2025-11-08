import { ReactNode } from "react";

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="m-auto mt-[30px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px] px-[15px] ">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-[-15px] ">
        {children}
      </div>
    </div>
  );
}
