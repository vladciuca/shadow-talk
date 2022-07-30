import React from "react";
import { BackToHome } from "../BackToHome/BackToHome";
import { AboutHeaderContainer, AboutTitle } from "./AboutHeader.styles";

export const AboutHeader = () => {
  return (
    <AboutHeaderContainer>
      <BackToHome />
      <AboutTitle>About</AboutTitle>
    </AboutHeaderContainer>
  );
};
