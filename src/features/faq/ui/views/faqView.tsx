import Wrapper from "@/components/shared/wrapper";
import React from "react";
import { FaqContainer } from "../components/faqContainer";
import SectionWrapper from "@/components/shared/sectionWrapper";
import FaqSidebar from "../components/faqSidebar";

export default function Faqs() {
  return (
    <Wrapper className="mt-15">
      <SectionWrapper>
        <FaqContainer />
        <FaqSidebar />
      </SectionWrapper>
    </Wrapper>
  );
}
