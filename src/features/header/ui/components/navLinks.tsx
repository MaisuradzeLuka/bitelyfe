import { navItems } from "@/constants/navbarData";
import Link from "next/link";
import DropDownItem from "./dropDownItem";
import SubmenuItem from "./submenuItem";

const NavLinks = ({ variant }: { variant: "mobile" | "desktop" }) => {
  const listStyles =
    variant === "mobile"
      ? "flex flex-col gap-3 my-4"
      : "flex items-center gap-6 h-full";

  return (
    <ul className={listStyles}>
      {navItems.map((item) =>
        item.children ? (
          <li
            key={item.id}
            className={variant === "desktop" ? "h-full mr-2" : ""}
          >
            {variant === "desktop" ? (
              <DropDownItem {...item} />
            ) : (
              <SubmenuItem {...item} key={item.id} />
            )}
          </li>
        ) : (
          <li key={item.id} className="text-lg font-bold tracking-tight">
            <Link href={item.href}>
              <span className="underlineHover">{item.title}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavLinks;
