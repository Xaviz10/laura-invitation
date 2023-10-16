import { FC } from "react";
import {
  StyledFilter,
  StyledScrollToAction,
  StyledWelcomeImage,
  StyledWelcomeImageContainer,
  StyledWelcomeSection,
} from "./WelcomeSection.styles";
import panoramica from "../../../../assets/images/panoramica.jpg";
import welcomeProfile from "../../../../assets/images/welcomeProfile.png";

export const WelcomeSection: FC = ({}) => {
  return (
    <StyledWelcomeSection
      id="/"
      style={{ backgroundImage: `url(${panoramica})` }}
    >
      <StyledFilter />
      <StyledWelcomeImageContainer>
        <StyledWelcomeImage src={welcomeProfile} alt="imagen Laura" />
      </StyledWelcomeImageContainer>
      <StyledScrollToAction>
        <b />
        Scroll
      </StyledScrollToAction>
    </StyledWelcomeSection>
  );
};
