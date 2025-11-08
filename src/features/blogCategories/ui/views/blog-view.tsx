import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";
import Blogs from "../components/blogs";
import { Suspense } from "react";

export default function BlogView({ blogCategory }: { blogCategory: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <Suspense fallback={null}>
          <Blogs blogCategory={blogCategory} />
        </Suspense>
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
