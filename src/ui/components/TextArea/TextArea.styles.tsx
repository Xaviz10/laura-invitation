import tw from "twin.macro";
import styled from "styled-components";

interface StyledTextAreaProps {
  error?: boolean;
}

export const StyledTextArea = styled.textarea.attrs({
  className: "StyledTextArea",
})<StyledTextAreaProps>`
  ${tw`
  relative
  w-full
  flex
  flex-row
  items-start
  justify-center
  px-2
  border-b-2
  border-gray-300
  outline-none
  bg-transparent
  font-primaryRegular
  text-base
  text-white
  font-black
  placeholder-gray-500
  
  disabled:(bg-gray-400 border-gray-400 text-gray-600 placeholder-gray-600)
  `}
  ::placeholder {
    ${tw`bottom-0`}
  }

  ${({ error }) => error && tw`border-red-600`}
`;

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})`
  ${tw`text-2xl font-black text-white font-secondaryItalic`}
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
