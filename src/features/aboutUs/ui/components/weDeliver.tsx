import SectionTitle from "@/components/shared/sectionTitle";
import { weDeliver } from "@/constants/aboutUsData";
import React from "react";

export default function WeDeliver() {
  return (
    <section className="mt-16 xl:mt-30">
      <SectionTitle title="We Deliver" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[30px] gap-[30px]">
        {weDeliver.map((item) => (
          <div key={item.title}>
            <h3 className="text-[18px] text-black font-bold tracking-tighter leading-[1.2] mb-5">
              {item.title}
            </h3>
            <p className="text-[#333]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
