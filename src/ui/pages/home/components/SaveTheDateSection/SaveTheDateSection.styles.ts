import tw from "twin.macro";
import styled from "styled-components";
import crownFlower from "../../../../assets/images/crownFlower.png";

export const StyledSaveTheDateSection = styled.section.attrs({
  className: "StyledSaveTheDateSection",
})`
  ${tw`relative  lg:(py-36) pb-24 bg-no-repeat bg-cover bg-center flex flex-col gap-8 text-center  items-center justify-center`}
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
export const StyledImageContainer = styled.div.attrs({
  className: "StyledImageContainer",
})`
  ${tw`relative w-40 h-40 mt-20`}
`;

export const StyledTitle = styled.h1.attrs({
  className: "StyledTitle",
})`
  ${tw`relative text-6xl lg:(text-7xl) font-primaryItalic text-white`}
`;

export const StyledSubtitle = styled.h2.attrs({
  className: "StyledSubtitle",
})`
  ${tw`relative flex flex-col text-3xl font-secondaryItalic text-white`}
`;

export const StyledCountdownContainer = styled.div.attrs({
  className: "StyledCountdownContainer",
})`
  ${tw`relative flex gap-8 pb-14`}
`;

export const StyledCountdownDigit = styled.div.attrs({
  className: "StyledCountdownDigit",
})`
  ${tw`relative min-w-[48px]  flex flex-col items-center justify-center`}
`;

export const StyledDigit = styled.p.attrs({
  className: "StyledDigit",
})`
  ${tw` relative text-6xl min-h-[80px] font-secondaryItalic text-white align-text-top`}
`;

export const StyledDigitLabel = styled.p.attrs({
  className: "StyledDigitLabel",
})`
  ${tw`relative text-sm font-secondaryItalic text-white`}
`;

export const StyledTipsContainer = styled.div.attrs({
  className: "StyledTipsContainer",
})`
  ${tw`relative mx-auto flex flex-wrap gap-8 items-center justify-center`}
`;
export const StyledTipsTitle = styled.h3.attrs({
  className: "StyledTipsTitle",
})`
  ${tw`relative flex flex-col text-6xl font-bold font-thirdItalic text-white`}
`;
