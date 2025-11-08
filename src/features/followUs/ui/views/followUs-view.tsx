import SectionTitle from "@/components/shared/sectionTitle";
import LinkCards from "../components/linkCards";

const FollowUs = ({ gridCols }: { gridCols: string }) => {
  return (
    <aside className="w-full">
      <SectionTitle title="Follow Us" />

      <LinkCards gridCols={gridCols} />
    </aside>
  );
};

export default FollowUs;
