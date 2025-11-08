"use client";

import { changeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AdminBreadCrumbs = ({ title }: { title: string }) => {
  const pathname = usePathname();

  const pathArray = pathname.split("/");

  return (
    <>
      <h2 className="text-black dark:text-white text-xl font-medium">
        {changeFirstLetter(title)}
      </h2>

      {pathname !== "/admin" && (
        <div className="flex items-center gap-2 -ml-2">
          {pathArray.map((item, index) => (
            <Link
              href={"#"}
              key={item}
              className={`flex items-center gap-2 text-sm ${
                item === title
                  ? "text-[#0162E8]"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {index === 0 || index + 1 === pathArray.length ? (
                ""
              ) : (
                <MdKeyboardDoubleArrowRight />
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminBreadCrumbs;
