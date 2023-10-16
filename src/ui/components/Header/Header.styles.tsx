import tw from "twin.macro";
import styled from "styled-components";

export const StyledDefaultHeader = styled.header.attrs((props) => ({
  className: props.className,
}))`
  ${tw`w-full box-border flex justify-center md:justify-between items-center fixed px-8 py-4 z-10`}
`;

export const StyledNavBar = styled.nav.attrs({
  className: "StyledNavBar",
})`
  ${tw`hidden md:(flex gap-6) `}
  > a {
    ${tw`lg:min-w-[116px] text-center text-2xl no-underline`}
    :hover {
      ${tw`underline`}
    }
  }
`;
