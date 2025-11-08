import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";
import HomeBlogsContainer from "../components/homeBlogsContainer";

export default function HomePageBlogs() {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <HomeBlogsContainer />
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
