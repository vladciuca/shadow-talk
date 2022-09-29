import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BackButton } from "./BackToHome.styles";

const BackToHome = () => {
  let navigate = useNavigate();
  return (
    <BackButton onClick={() => navigate("/chats")}>
      <IoIosArrowBack />
    </BackButton>
  );
};

export default BackToHome;
