import { FC } from "react";
import {
  StyledSaveTheDateSection,
  StyledImageContainer,
  StyledTitle,
  StyledSubtitle,
  StyledCountdownContainer,
  StyledCountdownDigit,
  StyledDigit,
  StyledDigitLabel,
  StyledFilter,
} from "./SaveTheDateSection.styles";
import haciendaClosest from "../../../../assets/images/haciendaClosest.jpeg";
import saveTheDate from "../../../../assets/images/saveTheDate.gif";
import { useGifReload } from "../../../../hooks";
import { useTimer } from "react-timer-hook";

export const SaveTheDateSection: FC = ({}) => {
  const { gifRef } = useGifReload(saveTheDate);
  const { minutes, hours, days } = useTimer({
    expiryTimestamp: new Date("2023-11-18T17:00:00.000-05:00"),
    autoStart: true,
  });
  return (
    <StyledSaveTheDateSection
      id="#date"
      style={{ backgroundImage: `url(${haciendaClosest})` }}
    >
      <StyledFilter />
      <StyledImageContainer>
        <img
          className={`w-40`}
          ref={gifRef}
          alt="imagen sección guarda la fecha"
        />
      </StyledImageContainer>

      <StyledTitle>Noviembre 18, 2023</StyledTitle>
      <StyledSubtitle>
        <span>Hacienda El Salto del Pómeca,</span>
        <span>Moniquirá, Boyacá</span>
      </StyledSubtitle>
      <StyledCountdownContainer>
        <StyledCountdownDigit>
          <StyledDigit>{days}</StyledDigit>
          <StyledDigitLabel>Días</StyledDigitLabel>
        </StyledCountdownDigit>
        <StyledCountdownDigit>
          <StyledDigit>{hours}</StyledDigit>
          <StyledDigitLabel>Horas</StyledDigitLabel>
        </StyledCountdownDigit>
        <StyledCountdownDigit>
          <StyledDigit>{minutes}</StyledDigit>
          <StyledDigitLabel>Minutos</StyledDigitLabel>
        </StyledCountdownDigit>
      </StyledCountdownContainer>
    </StyledSaveTheDateSection>
  );
};
