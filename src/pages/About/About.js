import React from "react";
import {
  Screen,
  AboutHeader,
  AboutContent,
  AppInfo,
  AppFeedback,
  Logo,
} from "components";

const About = () => {
  return (
    <>
      <AppInfo />
      <AppFeedback />
      <Logo />
      <Screen header={<AboutHeader />} content={<AboutContent />} />
    </>
  );
};
export default About;
