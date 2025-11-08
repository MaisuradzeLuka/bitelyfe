import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SubmenuProps } from "@/types/navbarTypes";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const DropDownItem = ({ title, children }: SubmenuProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger className="block h-full" asChild>
        <div className="relative h-full flex items-center cursor-pointer">
          <span className="text-lg font-bold tracking-tight underlineHover">
            {title}
          </span>
          <FaAngleDown className="absolute -right-3.5 bottom-5.5 text-[10px]" />
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        align="start"
        sideOffset={0}
        className=" bg-white border-none rounded-md px-0 py-2 w-[200px]"
      >
        <ul>
          {children?.map((item) => (
            <li
              key={item.id}
              className=" group hover:bg-gray-100 px-5 py-[2px] transition duration-200"
            >
              <Link
                href={item.href}
                className="block py-1 text-sm font-medium text-gray-900 group-hover:text-[#6610f2] group-hover:opacity-75 transition duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default DropDownItem;
