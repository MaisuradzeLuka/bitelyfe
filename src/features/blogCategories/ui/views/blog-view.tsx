import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";
import Blogs from "../components/blogs";
import { Suspense } from "react";

export default function BlogView({
  blogCategory,
  tableId,
}: {
  blogCategory: string;
  tableId: string;
}) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <Suspense fallback={null}>
          <Blogs blogCategory={blogCategory} tableId={tableId} />
        </Suspense>
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
