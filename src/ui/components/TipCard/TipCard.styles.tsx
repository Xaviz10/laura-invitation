import tw from "twin.macro";
import styled from "styled-components";

export const StyledCard = styled.article.attrs({
  className: "StyledCard",
})`
  ${tw`h-48 w-48 p-4 flex flex-col justify-center items-center gap-4 text-center rounded-2xl z-10`}

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.64);

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

export const StyledText = styled.p.attrs({
  className: "StyledText",
})`
  ${tw`text-white font-bold`}
`;
