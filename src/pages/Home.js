import React from "react";
import {
  Screen,
  ScreenHeader,
  ScreenContent,
  ScreenOverflow,
  ScreenFooter,
} from "../components/UI/UI.styles";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeFooter } from "../components/HomeFooter/HomeFooter";

const Home = () => {
  return (
    <>
      <Screen>
        <ScreenHeader>
          <HomeHeader />
        </ScreenHeader>
        <ScreenContent>
          <ScreenOverflow>This is the Home Page</ScreenOverflow>
        </ScreenContent>
        <ScreenFooter>
          <HomeFooter />
        </ScreenFooter>
      </Screen>
    </>
  );
};

export default Home;
