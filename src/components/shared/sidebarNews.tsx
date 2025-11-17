import { DishesTable, DrinksTable, ProductsTable } from "@/types/tablesTypes";
import SecondaryPostPard from "./secondaryPostCard";
import SectionTitle from "./sectionTitle";

type SidebarPost =
  | (DrinksTable & { tableId: string })
  | (DishesTable & { tableId: string })
  | (ProductsTable & { tableId: string });

export default function SidebarNews({
  posts,
  title,
}: {
  posts: SidebarPost[];
  title: string;
}) {
  return (
    <section>
      <div className=" flex flex-col lg:flex-row items-center  gap-16 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-20 my-16 px-0">
        <div className="w-full ">
          <SectionTitle title={title} />

          <ul className="flex flex-col gap-5 rounded-sm py-4">
            {posts.map((item) => (
              <SecondaryPostPard
                key={item.$id}
                date={item.$createdAt}
                image={item.coverimage}
                title={item.title}
                theme="light"
                flexReverse={true}
                width="!w-[120px]"
                height="h-[90px]"
                titleClassname="text-[15px] hover:text-[#6d62ff]"
                link={`/${item.tableId.replace("table", "")}/${item.$id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
