import ErrorComponent from "@/components/shared/errorComponent";
import { useGetSibedarList } from "../../api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarList } from "@/constants/adminSibebarData";
import { sidebarDataTypes } from "@/types/adminSidebarTypes";
import { FaTable } from "react-icons/fa6";

const Links = ({ open }: { open: boolean }) => {
  const pathname = usePathname();

  const { data, isLoading, isError } = useGetSibedarList();

  if (isLoading) return null;
  if (!data || isError) return <ErrorComponent />;

  const fullData: sidebarDataTypes[] = [...sidebarList, ...data];

  return (
    <ul className="w-full grid gap-4 mt-8">
      {fullData.map((item) => {
        const isMain = item.id === "admin";
        const isActive = isMain
          ? pathname === "/admin"
          : pathname.startsWith(item.link);

        return (
          <li
            key={item.id}
            className={`flex items-center border-l-3 ${
              isActive ? "border-[#0162E8]" : "border-transparent"
            } py-2`}
          >
            <Link
              href={item.link}
              className={`ml-4 flex items-center gap-2 dark:text-gray-300 hover:text-[#0162E8]! font-medium ${
                isActive ? "text-[#0162E8]!" : "text-gray-600"
              }`}
            >
              {item.icon ? <item.icon /> : <FaTable />}
              {open && (
                <span>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
