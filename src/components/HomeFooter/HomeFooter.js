import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";
import { HomeFooterContainer } from "./HomeFooter.styles";

const HomeFooter = () => {
  let navigate = useNavigate();
  return (
    <HomeFooterContainer>
      <Button
        text={"Start a New Chat"}
        handleClick={() => navigate("/new-chat")}
      />
    </HomeFooterContainer>
  );
};

export default HomeFooter;
