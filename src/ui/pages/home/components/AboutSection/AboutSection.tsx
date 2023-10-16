import { FC, useEffect, useRef, useState } from "react";
import {
  StyledAboutSection,
  StyledImageContainer,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from "./AboutSection.styles";
import firstSectionFlower from "../../../../assets/images/firstSectionFlower.gif";
import { useGifReload } from "../../../../hooks";

export const AboutSection: FC = () => {
  const { gifRef } = useGifReload(firstSectionFlower);

  return (
    <StyledAboutSection id="about">
      <StyledImageContainer>
        <img className={`w-80`} ref={gifRef} alt="imagen sección acerca" />
      </StyledImageContainer>
      <StyledTitle>Fiesta de Quince </StyledTitle>
      <StyledSubtitle>Celebremos juntos la vida</StyledSubtitle>
      <StyledParagraph>
        La vida teje momentos especiales, pero al compartirlos con quienes
        amamos, se convierten en recuerdos imborrables. Queremos celebrar los 15
        años de Laura Vanessa y hacerlo inolvidable. Esta no es una fiesta
        común; es una sorpresa llena de emoción. Te invitamos a ser parte de
        este capítulo mágico y crear recuerdos que iluminarán nuestros
        corazones.
      </StyledParagraph>
    </StyledAboutSection>
  );
};
