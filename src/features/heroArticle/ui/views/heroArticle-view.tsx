import PostsPageWrapper from "@/components/shared/postsPageWrapper";

import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import Article from "../components/article";

const HeroArticle = ({ id }: { id: string }) => {
  return (
    <PostsPageWrapper>
      <section className="flex items-stretch my-6 gap-8">
        <div className="hidden md:block relative border-b-3 px-2 pb-4 border-[#FF607D]">
          <div className="sticky top-5">
            <ShareLinks flexDirection="flex-col" theme="light" />
          </div>
        </div>

        <Article id={id} />
      </section>
    </PostsPageWrapper>
  );
};

export default HeroArticle;
