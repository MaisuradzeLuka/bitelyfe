import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SubmenuProps } from "@/types/navbarTypes";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";

const SubmenuItem = ({ title, children }: SubmenuProps) => {
  return (
    <Accordion type="single" collapsible className="w-max mr-2">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-min flex items-center gap-1 cursor-pointer">
          <div className="relative">
            <span className="text-lg font-bold tracking-tight">{title}</span>

            <FaAngleDown className="absolute -right-3.5 bottom-2 text-[10px]" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col mt-4 gap-2 ml-4">
            {children?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-lg font-normal tracking-tight"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SubmenuItem;
