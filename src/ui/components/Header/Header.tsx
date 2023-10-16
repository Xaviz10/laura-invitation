import { FC } from "react";
import { StyledDefaultHeader, StyledNavBar } from "./Header.styles";
import { useHeader } from "./useHeader";

export const Header: FC = () => {
  const { viewHightPercentage, t } = useHeader();
  return (
    <StyledDefaultHeader
      className={`${
        viewHightPercentage > 0.25 ? "bg-white drop-shadow" : "bg-transparent"
      }`}
    >
      <a href="#"></a>
      <StyledNavBar>
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#about"
        >
          {t("header.about")}
        </a>
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#what-i-do"
        >
          {t("header.whatIDo")}
        </a>
        {/* <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#work"
        >
          {t("header.work")}
        </a> */}
        <a
          className={`${
            viewHightPercentage > 0.25 ? "text-primary" : "text-white"
          }`}
          href="#contact"
        >
          {t("header.contact")}
        </a>
      </StyledNavBar>
    </StyledDefaultHeader>
  );
};
