import ContentBlock from "@/features/business/ui/components/contentBlock";
import Wrapper from "@/components/shared/wrapper";
import AdvertComponent from "@/components/shared/advertComponent";

const Business = () => {
  return (
    <section>
      <Wrapper className=" flex flex-col lg:flex-row items-center mx-auto gap-16 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-20 my-16 px-0">
        {/* <ContentBlock title="Business News" items={businessNews} /> */}

        <div className="w-full max-w-[300px] self-stretch mx-auto flex-shrink-0 py-4">
          <AdvertComponent
            classname=""
            image="/linedev.png"
            link="https://www.linkedin.com/company/linedevltd/posts/?feedView=all"
            text="We are software development company. we build amazing human made websites"
          />
        </div>

        {/* <ContentBlock title="Pet Friends" items={petFriends} /> */}
      </Wrapper>
    </section>
  );
};

export default Business;
