import { HighlightedProps } from "@/types/busnessTypes";
import MainPostCard from "../../../../components/shared/mainPostCard";
import SecondaryPostPard from "../../../../components/shared/secondaryPostCard";
import SectionTitle from "@/components/shared/sectionTitle";

const ContentBlock = ({ title, items }: HighlightedProps) => {
  const mainCard = items[0];

  return (
    <div className="w-full ">
      <SectionTitle title={title} />

      <MainPostCard
        category={mainCard.category}
        date={mainCard.$createdDate}
        image={mainCard.coverimage}
        title={mainCard.title}
        ratio="aspect-[3/2]"
        titleClassname="text-xl"
        link="#"
      />

      <ul className="flex flex-col gap-5 rounded-sm py-4">
        {items.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.$id}
            date={item.$createdDate}
            image={item.coverimage}
            title={item.title}
            theme="light"
            flexReverse={true}
            width="!w-[120px]"
            titleClassname="text-[15px] hover:text-[#6d62ff]"
            link="#"
          />
        ))}
      </ul>
    </div>
  );
};

export default ContentBlock;
