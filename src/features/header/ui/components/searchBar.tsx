import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="flex">
      <input
        type="text"
        className="w-full h-[38px] bg-white placeholder:text-gray-500 text-gray-600 text-[16px] rounded-l-sm outline-0 pl-4 overflow-x-hidden"
        placeholder="Search"
      />
      <button
        type="submit"
        className="w-11 h-[38px] bg-[#FF607D] rounded-r-sm cursor-pointer"
      >
        <IoSearch className="text-xl mx-auto text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
