import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import DefaultPostArticle from "../components/defaultPostArticle";
import ShareBar from "@/features/shareBar/ui/views/shareBar-view";

export default function DefaultPost({ id }: { id: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <DefaultPostArticle id={id} />
        <ShareBar id={id} />
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
