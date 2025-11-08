import FollowUs from "@/features/followUs/ui/views/followUs-view";
import FaqGallery from "./faqGallery";

export default function FaqSidebar() {
  return (
    <div className="mb-15 mt-12 lg:mt-1 w-full px-[15px] sm:px-0 md:px-[15px] lg:pr-[15px]  lg:col-span-1 ">
      <div className="xl:pl-[15px] space-y-15">
        <FaqGallery />
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
      </div>
    </div>
  );
}
