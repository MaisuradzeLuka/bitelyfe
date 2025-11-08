import { footerSocialLinks } from "@/constants/footerData";
import Link from "next/link";

const SocLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {footerSocialLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.link}>
            <link.icon className="w-[22px] h-[22px] hover:text-[#5627A0] transition duration-400" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocLinks;
