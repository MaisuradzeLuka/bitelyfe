import { footerNavLinks } from "@/constants/footerData";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex gap-8">
      {footerNavLinks.map((link) => (
        <li className="font-[700] group text-[13px] " key={link.id}>
          <Link
            href={link.link}
            className="group-hover:text-[#5627A0] duration-400 underlineHover "
          >
            {link.label}
          </Link>

          <div className=" bg-[#5627A0] " />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
