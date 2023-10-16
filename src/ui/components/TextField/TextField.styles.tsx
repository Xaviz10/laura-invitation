import tw from "twin.macro";
import styled from "styled-components";

interface StyledInputProps {
  error?: boolean;
}

export const StyledInput = styled.input.attrs({
  className: "StyledInput",
})<StyledInputProps>`
  ${tw`
      relative
      w-full
      flex
      flex-row
      items-start
      justify-center
      py-3
      px-2
      border-b-2
      border-gray-300
      outline-none


      text-lg
      text-black
      placeholder-gray-500
      
      disabled:(bg-gray-400 border-gray-400 text-gray-600 placeholder-gray-600)
      
  `}

  ${({ error }) => error && tw`border-red-600`}
`;

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})`
  ${tw`text-2xl font-medium `}
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
