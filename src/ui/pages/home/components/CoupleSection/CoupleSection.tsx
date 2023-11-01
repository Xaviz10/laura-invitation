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
} from "./CoupleSection.styles";
import thirdSectionFlower from "../../../../assets/images/thirdSectionPinkFlower.gif";
import { useGifReload } from "../../../../hooks";
import couple from "../../../../assets/images/couple.jpeg";
import coupleSecondary from "../../../../assets/images/coupleThird.jpeg";

export const CoupleSection: FC = () => {
  const { gifRef } = useGifReload(thirdSectionFlower);

  return (
    <StyledAboutSection id="about">
      <StyledImageContainer>
        <img className={`w-80`} ref={gifRef} alt="imagen donde cuando" />
      </StyledImageContainer>
      <StyledTitle>Adicionalmente</StyledTitle>
      <StyledSubtitle>Celebraremos</StyledSubtitle>
      <StyledParagraph>
        Los 25 maravillosos años de matrimonio de Jorge y Matilde. Este hito en
        su vida es de gran importancia para todos nosotros como familia, ya que
        refleja la fortaleza del amor y la unión que han construido a lo largo
        de los años. Nos sentimos afortunados de celebrar tanto los quince años
        de vida de Laura, como este cuarto de siglo de amor y compañía en un día
        lleno de alegría y gratitud.
        {/* Finalmente,
        continuaremos de fiesta, celebrando y creando memorias imborrables. */}
      </StyledParagraph>
      <StyledWhereContainer>
        <StyledImageWhereContainer>
          <StyledImage src={coupleSecondary} alt="imagen Eucaristía" />
          <StyledDetailsContainer>
            <StyledSubtitle>Jorge & Matilde</StyledSubtitle>
            <StyledParagraph>Bodas de Plata</StyledParagraph>
          </StyledDetailsContainer>
        </StyledImageWhereContainer>
      </StyledWhereContainer>
    </StyledAboutSection>
  );
};
