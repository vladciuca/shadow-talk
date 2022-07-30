import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  HomeHeaderContainer,
  HomeTitle,
  HomeAboutLink,
} from "./HomeHeader.styles";

export const HomeHeader = () => {
  let navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <HomeTitle>Chats</HomeTitle>
      <HomeAboutLink onClick={() => navigate("/about")}>
        <AiOutlineInfoCircle />
      </HomeAboutLink>
    </HomeHeaderContainer>
  );
};
