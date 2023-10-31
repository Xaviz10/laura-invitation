import tw from "twin.macro";
import styled from "styled-components";

export const StyledCheckbox = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`grid gap-x-5 items-start`}
  grid-template-columns: 1.25rem auto;

  label {
    ${tw`font-primaryRegular text-base text-white font-black`}
    a {
      ${tw`font-primaryRegular text-base text-white font-black`}
      text-decoration: underline !important;
    }
  }
`;

export const StyledInput = styled.input.attrs({
  className: "StyledInput",
})`
  ${tw`w-5 h-5 border-[1px] rounded-2xl bg-white border-gray-300`}
`;

export const StyledHelperText = styled.p.attrs({
  className: "StyledHelperText",
})`
  ${tw`
      text-base
      text-red-600
      `}
  word-break: break-word;
`;
