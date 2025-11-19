import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import SearchBar from "./searchBar";
import Link from "next/link";
import NavLinks from "./navLinks";
import { IoIosSearch } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

const DesktopNavigation = () => {
  return (
    <div className="hidden h-[60px] lg:flex items-center justify-between">
      <div className="h-full flex items-center gap-8">
        <Link href="/">
          <Image
            src="/bitelyfe-logo.png"
            width={125}
            height={60}
            alt="bitelyfe logo"
            className="w-[125px] h-[60px] bg-transparent object-cover"
          />
        </Link>

        <NavLinks variant="desktop" />
      </div>

      <Popover>
        <PopoverTrigger className="p-1.5  bg-[#4095f3] rounded-full cursor-pointer group text-2xl">
          <IoIosSearch className="group-data-[state=open]:hidden group-data-[state=closed]:block" />
          <TfiClose className="p-1 group-data-[state=open]:block group-data-[state=closed]:hidden" />
        </PopoverTrigger>

        <PopoverContent
          sideOffset={22}
          align="end"
          className="bg-white border-none w-[300px] px-5 py-3 shadow"
        >
          <div className="border border-gray-200 rounded-md">
            <SearchBar />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DesktopNavigation;
