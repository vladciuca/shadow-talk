import React from "react";
// import { useNavigate } from "react-router-dom";
import { HomeFooterContainer, Button } from "./HomeFooter.styles";

export const HomeFooter = ({ startNewChat }) => {
  // let navigate = useNavigate();
  // () => navigate("/chat")
  return (
    <HomeFooterContainer>
      <Button onClick={startNewChat}>Start New Chat</Button>
    </HomeFooterContainer>
  );
};
