import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  HomeHeaderContainer,
  HomeTitle,
  HomeAboutLink,
} from "./HomeHeader.styles";

const HomeHeader = () => {
  let navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <HomeTitle>Chats</HomeTitle>
      <HomeAboutLink onClick={() => navigate("/about")}>
        <AiOutlineQuestionCircle />
      </HomeAboutLink>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
