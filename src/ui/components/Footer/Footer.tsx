import { StyledFooter } from "./Footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p className="text-base">COPYRIGHT © 2023 JGamboa</p>
      <p className="text-xs">
        DESIGN BY{" "}
        <a
          className="text-white no-underline"
          target="blank__"
          href="https://rauliqbal.vercel.app/"
        >
          RAULIQBAL
        </a>
      </p>
    </StyledFooter>
  );
};
