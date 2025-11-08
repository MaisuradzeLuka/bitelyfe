import SectionTitle from "@/components/shared/sectionTitle";
import AboutCard from "./aboutCard";
import { aboutCards } from "@/constants/aboutUsData";

export default function AboutFooter() {
  return (
    <section className="mt-15 xl:mt-30">
      <SectionTitle title="Who We Are" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mt-[30px]">
        {aboutCards.map((card, i) => (
          <AboutCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
