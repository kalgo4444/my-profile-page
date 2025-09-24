import { memo, useState } from "react";
import SelectLanguage from "./select-language/select-language";
import Logo from "./logo/logo";
import NavLinks from "./nav-links/nav-links";
import BurderBtn from "./burder-btn/burder-btn";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="w-full h-14 border bg-white border-neutral-300">
      <nav className="h-full container flex items-center justify-between">
        <Logo />
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex items-center gap-x-4">
          <SelectLanguage />
          <BurderBtn setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
