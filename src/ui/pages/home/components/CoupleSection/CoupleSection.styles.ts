import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledAboutSection = styled.section.attrs({
  className: "StyledAboutSection",
})`
  ${tw`bg-white  mx-auto my-16 px-6 flex flex-col gap-4 text-center  items-center justify-center lg:(px-12)`}
`;

export const StyledImageContainer = styled.div.attrs({
  className: "StyledImageContainer",
})`
  ${tw`w-80 h-24 `}
`;

export const StyledTitle = styled.h1.attrs({
  className: "StyledTitle",
})`
  ${tw` pt-16 text-6xl lg:text-7xl font-primaryItalic`}
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
  ${tw`text-sm max-w-2xl`}
  color: #333;
`;

export const StyledWhereContainer = styled.div.attrs({
  className: "StyledWhereContainer",
})`
  ${tw`py-8 flex flex-wrap gap-16 justify-center items-center lg:(py-16)`}
`;

export const StyledImageWhereContainer = styled.div.attrs({
  className: "StyledImageWhereContainer",
})`
  ${tw`relative flex flex-col gap-6 items-center`}
`;

export const StyledImage = styled.img.attrs({
  className: "StyledImage",
})`
  ${tw`w-48 h-48 lg:(w-[250px] h-[250px]) object-cover`}
  border-radius: 50%;
`;

export const StyledDetailsContainer = styled.div.attrs({
  className: "StyledDetailsContainer",
})`
  ${tw`relative  flex flex-col gap-2`}
`;
