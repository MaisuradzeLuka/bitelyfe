import Link from "next/link";
import { BsTags } from "react-icons/bs";
const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="flex items-center gap-1 !text-gray-500">
        <BsTags /> <span className="text-lg">Tags: </span>
      </div>

      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <Link
            href="#"
            key={index}
            className="font-semibold text-lg underlineHover hover:text-[#6B5DF7]"
          >
            {tag}
            {index + 1 === tags.length ? "" : ","}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
