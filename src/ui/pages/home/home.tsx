import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import {
  AboutSection,
  ConfirmationSection,
  CoupleSection,
  SaveTheDateSection,
  TimeLineSection,
  WelcomeSection,
} from "./components";
import { useHomeViewModel } from "../../viewModels";

export const Home: FC = () => {
  const { handleContactForm } = useHomeViewModel();
  return (
    <DefaultLayout>
      <WelcomeSection />
      <AboutSection />
      <SaveTheDateSection />
      <TimeLineSection />
      <ConfirmationSection handleContactForm={handleContactForm} />
      <CoupleSection />
    </DefaultLayout>
  );
};
