import React from "react";
import { Background } from "./IconBackground.styles";

const IconBackground = ({ size, icon }) => {
  return <Background size={size}>{icon}</Background>;
};

export default IconBackground;
