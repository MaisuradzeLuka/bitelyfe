import React from "react";
import AboutMain from "../components/aboutMain";
import Wrapper from "@/components/shared/wrapper";
import WeDeliver from "../components/weDeliver";
import AboutFooter from "../components/aboutFooter";

export default function AboutUs() {
  return (
    <Wrapper className="mt-[60px]">
      <AboutMain />
      <WeDeliver />
      <AboutFooter />
    </Wrapper>
  );
}
