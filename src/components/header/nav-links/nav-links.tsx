import { memo, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavLinks = (props: IProps) => {
  const { isOpen, setIsOpen } = props;
  const { t } = useTranslation();
  const style =
    "flex-col md:flex-row flex items-center max-md:z-50 max-md:p-5 max-md:fixed max-md:w-full max-md:h-screen max-md:bg-white md:items-center gap-y-10 md:gap-x-5 text-base md:text-lg font-semibold max-md:top-0 ";

  return (
    <ul
      className={`${style} ${isOpen ? "max-md:left-0" : "max-md:-left-[100%]"}`}
    >
      <li onClick={() => setIsOpen(false)}>
        <a href="#about">{t("header.navlinks.about")}</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#projects">{t("header.navlinks.projects")}</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#contact">{t("header.navlinks.contact")}</a>
      </li>
    </ul>
  );
};

export default memo(NavLinks);
