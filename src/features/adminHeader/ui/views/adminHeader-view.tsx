import { CiMail } from "react-icons/ci";
import ThemeToggle from "../components/themeToggle";
import SearchBar from "../components/searchBar";
import Language from "../components/language";
import Profile from "../components/profile";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Notifications from "../components/notifications";

const Header = () => {
  return (
    <header className="w-full h-[64px] flex items-center justify-between py-3 px-4 darborder-b dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-[#0F1724]">
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/vaxshami_logo4_small.png"
          width={30}
          height={30}
          alt="page logo"
          className="md:hidden"
        />

        <SidebarTrigger className="cursor-pointer" />

        <SearchBar variant="desktop" />
      </div>

      <div className="flex items-center gap-4 ">
        <SearchBar variant="mobile" />
        <Language />
        <ThemeToggle />
        <Notifications />
        <CiMail className="hidden sm:inline-block w-5 h-5" />
        <Profile />
      </div>

      {/* 

      <div className="flex items-center gap-4 text-xl">
       

        
       

        

        <RxHamburgerMenu className="hidden sm:inline-block" />
        
      </div>
      <div className="flex items-center gap-4 text-xl">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="cursor-pointer">
              <MdSearch className="text-2xl" />
            </button>
          </PopoverTrigger>

          <PopoverContent
            className="w-screen sm:w-[250px] rounded-md bg-white p-2 dark:bg-[#19202f]"
            sideOffset={22}
            align="end"
          >
            <div className="flex justify-between items-center border border-gray-300 rounded-md">
              <input
                type="text"
                className="outline-none ring-0 pl-2 text-sm"
                placeholder="Search..."
              />

              <button className="flex items-center justify-between bg-[#1A71EA] rounded-r-md w-10 h-10">
                <MdSearch className="text-2xl " />
              </button>
            </div>
          </PopoverContent>
        </Popover>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
            flag
          </SelectTrigger>

          <SelectContent
            sideOffset={15}
            align="end"
            className="border border-red-500"
          >
            {selectItems.map((flag) => (
              <SelectItem key={flag.id} value={flag.id}>
                {flag.flag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <ThemeToggle />
        <CiMail className="hidden sm:inline-block" />

        <Popover open={openNotifications} onOpenChange={setOpenNotifications}>
          <PopoverTrigger asChild>
            <button className="cursor-pointer">
              <FaRegBell className="hidden sm:inline-block" />
            </button>
          </PopoverTrigger>

          <PopoverContent
            className="w-screen sm:w-[350px] bg-white dark:bg-[#19202f] rounded-lg"
            sideOffset={22}
            align="end"
          >
            <div className="relative bg-blue-500 rounded-t-lg p-4 px-5">
              <h3 className="text-[16px] font-medium  text-white">
                Notifications
              </h3>
              <p className="text-xs">You have 4 unread Notifications</p>

              <button className="absolute text-xs bg-yellow-500 rounded-full px-1 text-black right-2 bottom-7">
                Mark All Read
              </button>
            </div>

            <ul className="max-h-[250px] overflow-y-auto">
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <Link
                    href={notification.link}
                    className="flex items-center gap-6 py-2 px-5 border-b border-gray-500"
                  >
                    <div
                      style={{ background: notification.color }}
                      className="w-10 h-10 rounded-full flex justify-center items-center text-white"
                    >
                      <notification.icon />
                    </div>

                    <div className="relative w-full">
                      <h3 className="text-[16px] font-medium  text-white">
                        {notification.title}
                      </h3>
                      <p className="text-xs">{notification.date}</p>

                      <button className="absolute rounded-full right-0 bottom-5 text-sm">
                        <FaAngleRight />
                      </button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center bg-[#202736] h-10">
              <Link href="#" className="text-sm text-[#0066ff]">
                VIEW ALL
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        <RxHamburgerMenu className="hidden sm:inline-block" />
        <Image
          src="/profile-avatar.jpg"
          alt="avatar image"
          width={37}
          height={37}
          className="w-9 h-9 object-cover rounded-full"
        />
      </div> */}
    </header>
  );
};

export default Header;
