import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./searchBar";

import NavLinks from "./navLinks";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="relative flex flex-col lg:hidden py-5">
      <Link href="/">
        <Image
          src="/image5.png"
          width={125}
          height={20}
          alt="morena logo"
          className="w-[100px] h-[40px] bg-transparent object-cover"
        />
      </Link>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="absolute right-0 top-5 cursor-pointer text-3xl">
            <RxHamburgerMenu />
          </AccordionTrigger>

          <AccordionContent className="w-full">
            <NavLinks variant="mobile" />

            <SearchBar />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileNavigation;
