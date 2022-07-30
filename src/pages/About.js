import React from "react";
import {
  Screen,
  ScreenHeader,
  ScreenContent,
  ScreenOverflow,
  ScreenFooter,
} from "../components/UI/UI.styles";
import { AboutHeader } from "../components/AboutHeader/AboutHeader";

const About = () => {
  return (
    <>
      <Screen>
        <ScreenHeader>
          <AboutHeader />
        </ScreenHeader>
        <ScreenContent>
          <ScreenOverflow></ScreenOverflow>
        </ScreenContent>
        <ScreenFooter></ScreenFooter>
      </Screen>
    </>
  );
};

export default About;
