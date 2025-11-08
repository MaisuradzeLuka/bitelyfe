import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { notifications } from "@/constants/notifcations";
import { Link } from "lucide-react";
import React from "react";
import { FaRegBell, FaAngleRight } from "react-icons/fa";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FaRegBell className="hidden sm:inline-block w-[18px] h-[18px]" />
      </PopoverTrigger>

      <PopoverContent
        className="w-screen sm:w-[350px] bg-white dark:bg-[#19202f] rounded-lg"
        sideOffset={22}
        align="end"
      >
        <div className="relative bg-blue-500 rounded-t-lg p-4 px-5">
          <h3 className="text-[16px] font-medium  text-white">Notifications</h3>
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
  );
};

export default Notifications;
