import React from "react";
import { Screen } from "../components/Screen/Screen";
import { AboutHeader } from "../components/AboutHeader/AboutHeader";
import { AboutContent } from "../components/AboutContent/AboutContent";

const About = () => (
  <Screen header={<AboutHeader />} content={<AboutContent />} />
);

export default About;
