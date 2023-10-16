import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledAboutSection = styled.section.attrs({
  className: "StyledAboutSection",
})`
  ${tw`bg-white max-w-2xl mx-auto my-16 px-6 flex flex-col gap-4 text-center  items-center justify-center lg:(px-12)`}
`;

export const StyledImageContainer = styled.div.attrs({
  className: "StyledImageContainer",
})`
  ${tw`w-80 h-40`}
`;

export const StyledTitle = styled.h1.attrs({
  className: "StyledTitle",
})`
  ${tw`text-7xl font-primaryItalic`}
  color: #333;
`;

export const StyledSubtitle = styled.h2.attrs({
  className: "StyledSubtitle",
})`
  ${tw`text-3xl font-secondaryItalic`}
  color: #333;
`;

export const StyledParagraph = styled.p.attrs({
  className: "StyledParagraph",
})`
  ${tw`text-sm`}
  color: #333;
`;
