import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import {
  ScreenContainer,
  ScreenHeader,
  ScreenFooter,
  ScreenTopic,
  ScreenContent,
  ScreenOverflow,
} from "./Screen.styles";

export const Screen = () => {
  return (
    <>
      <ScreenContainer>
        <ScreenHeader>
          <Header />
        </ScreenHeader>
        <ScreenTopic>asd</ScreenTopic>
        <ScreenContent>
          <ScreenOverflow>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
            <div>asdad</div>
          </ScreenOverflow>
        </ScreenContent>
        <ScreenFooter>
          <Footer />
        </ScreenFooter>
      </ScreenContainer>
    </>
  );
};
