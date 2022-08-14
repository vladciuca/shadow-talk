import React from "react";
import { BackToHome } from "components";
import { AboutHeaderContainer, AboutTitle } from "./AboutHeader.styles";

const AboutHeader = () => {
  return (
    <AboutHeaderContainer>
      <BackToHome />
      <AboutTitle>About</AboutTitle>
    </AboutHeaderContainer>
  );
};

export default AboutHeader;
