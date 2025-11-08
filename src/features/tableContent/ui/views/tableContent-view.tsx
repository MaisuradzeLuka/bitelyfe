import Link from "next/link";
import Items from "../components/items";

const TableContent = ({ title }: { title: string }) => {
  return (
    <section className="adminContentWrapper">
      <div className="flex justify-between mt-6">
        <h1 className="text-xl">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>

        <Link
          href={`/admin/create/${title}`}
          className="bg-[#055CD7] text-white py-[6px] px-3 rounded-md"
        >
          Create new post
        </Link>
      </div>

      <Items title={title} />
    </section>
  );
};

export default TableContent;
