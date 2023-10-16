import tw from "twin.macro";
import styled from "styled-components";

interface ImageContainerProps {
  primaryColorGradient: string;
  secondaryColorGradient: string;
}

export const StyledArticleCard = styled.article.attrs({
  className: "StyledArticleCard",
})`
  ${tw`relative p-8 pt-[72px] border border-gray-600 rounded-tr-[48px] max-w-[420px] md:h-60 mt-20`}
`;

export const StyledImageContainer = styled.div.attrs({
  className: "StyledImageContainer",
})<ImageContainerProps>`
  ${tw`absolute p-6 w-28 h-28 rounded-2xl top-0`}
  transform: translateY(-50%);
  ${({ primaryColorGradient, secondaryColorGradient }) => {
    return `
    background: linear-gradient(134deg, ${primaryColorGradient} -24%, ${secondaryColorGradient} 116%);
    `;
  }}
`;
