import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import QuestionsAndAnswers from "./questionsAndAnswers";
import { firstFaqSection, secondFaqSection } from "@/constants/faq";
import SectionTitle from "@/components/shared/sectionTitle";

export function FaqContainer() {
  return (
    <MainSectionWrapper>
      <SectionTitle title={"General Questions"} styles="mb-10" />
      <QuestionsAndAnswers list={firstFaqSection} />
      <SectionTitle title={"Get to Know Us"} styles="mt-15 mb-10" />
      <QuestionsAndAnswers list={secondFaqSection} />
    </MainSectionWrapper>
  );
}
