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
  StyledTipsContainer,
  StyledTipsTitle,
} from "./ThankYouSection.styles";
import haciendaClosest from "../../../../assets/images/haciendaClosest.jpeg";
import saveTheDate from "../../../../assets/images/saveTheDate.gif";
import { useGifReload } from "../../../../hooks";
import { useTimer } from "react-timer-hook";
import { TipCard } from "../../../../components";
import { DressIcon, EnvelopeIcon } from "../../../../assets/Svg";

export const ThankYouSection: FC = ({}) => {
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
      <StyledTipsTitle>Recuerda</StyledTipsTitle>
      <StyledTipsContainer>
        <TipCard Icon={DressIcon} text={"Vestido azul reservado"} />
        <TipCard Icon={EnvelopeIcon} text={"Lluvia de sobres"} />
      </StyledTipsContainer>
    </StyledSaveTheDateSection>
  );
};
