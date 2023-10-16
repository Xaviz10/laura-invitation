import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import { AboutSection, WelcomeSection } from "./components";
import { useHomeViewModel } from "../../viewModels";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
      <AboutSection />
    </DefaultLayout>
  );
};
