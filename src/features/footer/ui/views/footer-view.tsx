import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import SocLinks from "../components/soclinks";
import NavLinks from "../components/navlinks";
import Copyright from "../components/copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] px-[15px] pb-[55px] mx-auto mt-8">
      <Wrapper>
        <div className="w-full flex flex-col xl:flex-row items-center xl:justify-between gap-6 border-b border-gray-300 pb-8 mb-6">
          <SocLinks />

          <Link href="/">
            <Image
              src="/vaxshami_logo4.png"
              width={170}
              height={25}
              alt="footer logo"
            />
          </Link>

          <NavLinks />
        </div>

        <Copyright />
      </Wrapper>
    </footer>
  );
};

export default Footer;
