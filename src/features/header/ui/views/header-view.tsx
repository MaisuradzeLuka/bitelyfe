import Wrapper from "@/components/shared/wrapper";
import MobileNavigation from "../components/mobileNavigation";
import DesktopNavigation from "../components/desktopNavigation";

const Header = () => {
  return (
    <header className=" purpleLinearBackground text-white">
      <nav>
        <Wrapper>
          <MobileNavigation />
          <DesktopNavigation />
        </Wrapper>
      </nav>
    </header>
  );
};

export default Header;
