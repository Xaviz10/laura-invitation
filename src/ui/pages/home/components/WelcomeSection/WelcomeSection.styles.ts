import tw from "twin.macro";
import styled from "styled-components";
import crownFlower from "../../../../assets/images/crownFlower.png";

export const StyledWelcomeSection = styled.section.attrs({
  className: "StyledWelcomeSection",
})`
  ${tw`relative h-screen max-h-full bg-no-repeat bg-cover bg-center grid place-content-center`}
  background-attachment: fixed;
`;

export const StyledFilter = styled.div.attrs({
  className: "StyledFilter",
})`
  ${tw`absolute h-screen max-h-full w-screen`}
  background-color: rgb(30, 29, 45);
  opacity: 0.4;
  background-attachment: fixed;
`;

export const StyledWelcomeImageContainer = styled.div.attrs({
  className: "StyledWelcomeImageContainer",
})`
  ${tw`relative w-80 h-80 lg:(w-[485px] h-[485px]) grid place-content-center`}

  &:after {
    ${tw`absolute mt-[-14px] ml-[-2px] w-80 h-80 lg:(w-[485px] h-[485px] mt-[-24px] ml-[-10px]) `}
    background: url(${crownFlower});
    background-size: cover;
    content: "";
    z-index: 1;
    -webkit-animation: rotating 425s linear infinite;
    -moz-animation: rotating 425s linear infinite;
    -ms-animation: rotating 425s linear infinite;
    -o-animation: rotating 425s linear infinite;
    animation: rotating 425s linear infinite;
  }
`;

export const StyledWelcomeImage = styled.img.attrs({
  className: "StyledWelcomeImage",
})`
  ${tw`w-[250px] h-[250px] lg:(w-[380px] h-[380px]) object-cover`}
  border-radius: 50%;
`;

export const StyledScrollToAction = styled.a.attrs({
  className: "StyledScrollToAction",
})`
  ${tw`absolute flex flex-col items-center left-1/2 w-[60px] ml-[-30px] mb-[1rem] bottom-0 mx-auto text-center text-white`}
  & b {
    ${tw`relative inline-block w-[25px] h-[40px]  rounded-[15px]`}
    border: 2px solid #fff;
    &:before {
      display: block;
      content: "";
      height: 4px;
      width: 2px;
      background: #fff;
      left: 10px;
      top: 8px;
      position: absolute;
      animation: 2s ease 0s normal none infinite mouse-down;
      -webkit-animation: 2s ease 0s normal none infinite mouse-down;
    }
  }
`;
