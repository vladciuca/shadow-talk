import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeFooterContainer, Button } from "./HomeFooter.styles";

export const HomeFooter = () => {
  let navigate = useNavigate();
  return (
    <HomeFooterContainer>
      <Button onClick={() => navigate("/new-chat")}>Start a New Chat</Button>
    </HomeFooterContainer>
  );
};
