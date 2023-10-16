import { FC } from "react";
import {
  StyledScrollToAction,
  StyledWelcomeImage,
  StyledWelcomeImageContainer,
  StyledWelcomeSection,
} from "./WelcomeSection.styles";
import backgroundWelcome from "../../../../assets/images/backgroundWelcome.jpeg";
import welcomeProfile from "../../../../assets/images/welcomeProfile.png";

export const WelcomeSection: FC = ({}) => {
  return (
    <StyledWelcomeSection
      id="/"
      style={{ backgroundImage: `url(${backgroundWelcome})` }}
    >
      <StyledWelcomeImageContainer>
        <StyledWelcomeImage src={welcomeProfile} />
      </StyledWelcomeImageContainer>
      <StyledScrollToAction>
        <b />
        Scroll
      </StyledScrollToAction>
    </StyledWelcomeSection>
  );
};
