import React from "react";
import { ButtonContainer } from "./Button.styles";

const Button = ({ icon, text, handleClick, navigateNotAllowed, user }) => {
  return (
    <ButtonContainer
      onClick={handleClick}
      navigateNotAllowed={navigateNotAllowed}
      user={user}
    >
      <span>{icon}</span>
      {text}
    </ButtonContainer>
  );
};

export default Button;
