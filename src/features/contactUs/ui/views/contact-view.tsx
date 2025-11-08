import React from "react";
import Wrapper from "@/components/shared/wrapper";
import ContactForm from "../components/contactForm";
import ContactFormIntro from "../components/contactFormIntro";

export default function ContactUs() {
  return (
    <Wrapper className="mt-[30px]">
      <div className="flex flex-wrap justify-center mb-10 ">
        <div className="flex flex-col items-start gap-7 sm:w-[510px] md:w-[690px] lg:w-[610px] xl:w-[730px] 2xl:w-[823px]">
          <ContactFormIntro />
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
}
