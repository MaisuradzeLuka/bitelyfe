import Wrapper from "@/components/shared/wrapper";
import TopCards from "../components/topCards";
import BottomCards from "../components/bottomCards";
import SectionTitle from "@/components/shared/sectionTitle";
import Advert from "../components/advert";

const EditorsPick = () => {
  return (
    <section className="overflow-x-hidden mb-14">
      <Wrapper className="my-12 mb-18">
        <SectionTitle title="Pick Your Vaxshami" />
        <TopCards />
        <Advert classname="" link="" text="" image="/linedev.png" />
      </Wrapper>

      <BottomCards />
    </section>
  );
};

export default EditorsPick;
