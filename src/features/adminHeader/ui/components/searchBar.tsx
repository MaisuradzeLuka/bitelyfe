"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ variant }: { variant: "mobile" | "desktop" }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {variant === "desktop" ? (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="hidden w-[350px] h-[40px] lg:flex bg-[#ECF0FA] dark:bg-[#19202F] dark:border border-gray-700 rounded-full px-2"
        >
          <input
            type="text"
            className="w-full h-full font-medium placeholder:text-[#a8b3c567] text-[#4d5157] dark:text-white text-[14px] outline-0 pl-2 overflow-x-hidden"
            placeholder="Search for anything..."
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="w-11 cursor-pointer">
            <IoSearch className="text-xl mx-auto text-[#abb3c0]" />
          </button>
        </form>
      ) : (
        <Popover>
          <PopoverTrigger className="lg:hidden cursor-pointer">
            <IoSearch className="text-xl mx-auto text-[#abb3c0]" />
          </PopoverTrigger>
          <PopoverContent
            className="lg:hidden w-full max-w-[300px] bg-white dark:bg-[#19202F] border-none py-3 px-4"
            sideOffset={20}
            align="end"
          >
            <form
              onSubmit={(e) => handleSubmit(e)}
              className=" h-[40px] flex bg-white dark:bg-[#141a26] rounded-md "
            >
              <input
                type="text"
                className="w-full h-full font-medium placeholder:text-[#a8b3c567] text-[#4d5157] dark:text-white border border-gray-300 dark:border-gray-700 rounded-l-md text-[14px] outline-0 pl-4 overflow-x-hidden"
                placeholder="Search for anything..."
                value={value}
                onChange={(e) => handleChange(e)}
              />

              <button
                type="submit"
                className="w-11 cursor-pointer bg-[#0161E6] rounded-r-md"
              >
                <IoSearch className="text-xl mx-auto  text-white" />
              </button>
            </form>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default SearchBar;
