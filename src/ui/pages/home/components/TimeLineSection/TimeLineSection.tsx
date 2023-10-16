import { FC, useEffect, useRef, useState } from "react";
import {
  StyledAboutSection,
  StyledDetailsContainer,
  StyledImage,
  StyledImageContainer,
  StyledImageWhereContainer,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
  StyledWhereContainer,
} from "./TimeLineSection.styles";
import thirdSectionFlower from "../../../../assets/images/thirdSectionFlower.gif";
import { useGifReload } from "../../../../hooks";
import iglesia from "../../../../assets/images/iglesia.jpeg";
import hacienda from "../../../../assets/images/hacienda.jpeg";
import haciendaClosest from "../../../../assets/images/haciendaClosest.jpeg";
import { Button } from "../../../../components";

export const TimeLineSection: FC = () => {
  const { gifRef } = useGifReload(thirdSectionFlower);

  return (
    <StyledAboutSection id="about">
      <StyledImageContainer>
        <img className={`w-80`} ref={gifRef} alt="imagen donde cuando" />
      </StyledImageContainer>
      <StyledTitle>Detalles</StyledTitle>
      <StyledSubtitle>Donde & Cuando</StyledSubtitle>
      <StyledParagraph>
        Inicialmente, celebraremos la eucaristía por sus primeros 15 años de
        vida, esta se llevará a cabo en la iglesia principal de Moniquirá.
        Posteriormente, será la recepción, que se llevará a cabo en la Hacienda
        El Salto del Pómeca, ubicada a 15 minutos de Moniquirá.
        {/* Finalmente,
        continuaremos de fiesta, celebrando y creando memorias imborrables. */}
      </StyledParagraph>
      <StyledWhereContainer>
        <StyledImageWhereContainer>
          <StyledImage src={iglesia} alt="imagen Eucaristía" />
          <StyledDetailsContainer>
            <StyledSubtitle>La Eucaristía</StyledSubtitle>
            <StyledParagraph>5:00 PM – 6:30 PM</StyledParagraph>
            <StyledParagraph>
              Basílica Menor de Nuestra Señora del Rosario,
            </StyledParagraph>
            <StyledParagraph>Moniquira</StyledParagraph>
          </StyledDetailsContainer>
          <Button
            href="https://maps.app.goo.gl/RGEaCjY5T75TaTdV8"
            color="primary"
          >
            Ver Mapa
          </Button>
        </StyledImageWhereContainer>

        <StyledImageWhereContainer>
          <StyledImage src={hacienda} alt="imagen La Recepción" />
          <StyledDetailsContainer>
            <StyledSubtitle>La Recepción</StyledSubtitle>
            <StyledParagraph>7:00 PM – 8:30 PM</StyledParagraph>
            <StyledParagraph>Hacienda El Salto del Pómeca,</StyledParagraph>
            <StyledParagraph>Moniquira</StyledParagraph>
          </StyledDetailsContainer>
          <Button
            href="https://maps.app.goo.gl/jKPnohSMrgfzaZAR9"
            color="primary"
          >
            Ver Mapa
          </Button>
        </StyledImageWhereContainer>

        <StyledImageWhereContainer>
          <StyledImage src={haciendaClosest} alt="imagen La Fiesta" />
          <StyledDetailsContainer>
            <StyledSubtitle>La Fiesta</StyledSubtitle>
            <StyledParagraph>8:30 PM - Aleatorio</StyledParagraph>
            <StyledParagraph>Hacienda El Salto del Pómeca,</StyledParagraph>
            <StyledParagraph>Moniquira</StyledParagraph>
          </StyledDetailsContainer>
          <Button
            href="https://maps.app.goo.gl/jKPnohSMrgfzaZAR9"
            color="primary"
            target="_blank"
          >
            Ver Mapa
          </Button>
        </StyledImageWhereContainer>
      </StyledWhereContainer>
    </StyledAboutSection>
  );
};
