import SectionTitle from "@/components/shared/sectionTitle";
import DontMissCards from "../components/dontMissCards";
import { DontMissType } from "@/types/dontMissTypes";

const DontMiss = ({ className, categoryBg, hoverTextColor }: DontMissType) => {
  return (
    <section
      className={`w-full max-w-[1200px] 2xl:max-w-[1400px] mx-auto ${className} mb-18 pt-14 pb-10 lg:pb-16 px-5 lg:px-14 xl:rounded-[50px]`}
    >
      <SectionTitle title="Top 4 Drinks With Vaxshami" />

      <DontMissCards categoryBg={categoryBg} hoverTextColor={hoverTextColor} />
    </section>
  );
};

export default DontMiss;
