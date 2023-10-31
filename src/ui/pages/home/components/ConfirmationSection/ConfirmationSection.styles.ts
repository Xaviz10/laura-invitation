import tw from "twin.macro";
import styled from "styled-components";
import crownFlower from "../../../../assets/images/crownFlower.png";

export const StyledSaveTheDateSection = styled.section.attrs({
  className: "StyledSaveTheDateSection",
})`
  ${tw`relative px-6  lg:(py-36) py-24 bg-no-repeat bg-cover bg-center flex flex-col gap-8 text-center  items-center justify-center`}
  background-attachment: fixed;
`;
export const StyledFilter = styled.div.attrs({
  className: "StyledFilter",
})`
  ${tw`absolute h-full max-h-full w-screen top-0`}
  background-color: rgb(30, 29, 45);
  opacity: 0.4;
  background-attachment: fixed;
  filter: blur(4px);
`;
export const StyledTitle = styled.h1.attrs({
  className: "StyledTitle",
})`
  ${tw`font-bold text-7xl lg:(text-7xl) font-thirdItalic z-10`}
  color: white;
`;

export const StyledImageContainer = styled.div.attrs({
  className: "StyledImageContainer",
})`
  ${tw`relative w-40 h-40 mt-20`}
`;

export const StyledContactForm = styled.form.attrs({
  className: "StyledContactForm",
})`
  ${tw`relative w-full max-w-4xl flex flex-col gap-8  rounded-r-2xl px-8 py-12 items-center`}

  border-radius: 16px;

  background: linear-gradient(
    118deg,
    rgba(255, 255, 255, 0.6) -19.85%,
    rgba(235, 235, 235, 0.5) 4.2%,
    rgba(224, 224, 224, 0.4) 13.88%,
    rgba(212, 212, 212, 0.3) 27.98%,
    rgba(207, 207, 207, 0.2) 37.8%,
    rgba(202, 202, 202, 0.2) 44.38%,
    rgba(200, 200, 200, 0.2) 50.54%,
    rgba(196, 196, 196, 0.2) 60.21%
  );

  box-shadow: 0px 1px 24px -1px rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
`;
