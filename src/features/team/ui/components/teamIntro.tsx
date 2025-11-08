import SectionTitle from "@/components/shared/sectionTitle";
import React from "react";

export default function TeamIntro() {
  return (
    <div className="my-15  space-y-3">
      <SectionTitle title="Meet our team" />
      <p className="font-semibold mt-6">Programmers Turned Food Critics</p>
      <p className="text-[#333 lg:w-2/3">
        We’re a group of tech minds who swapped debugging code for decoding
        flavors. With the precision of developers and the curiosity of true
        gourmets, we taste, test, and review every culinary experience with the
        same care we give to crafting clean code — analytical, passionate, and
        always authentic.
      </p>
    </div>
  );
}
