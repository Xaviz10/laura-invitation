import tw from "twin.macro";
import styled from "styled-components";

export const StyledFooter = styled.footer.attrs({
  className: "StyledFooter",
})`
  ${tw`w-full  bg-primary p-8 grid place-content-center gap-4  text-white text-center`}
  background: linear-gradient(126.69deg, #4275FA 6.42%, rgba(17, 2, 198, 0.87) 104.03%);
`;
