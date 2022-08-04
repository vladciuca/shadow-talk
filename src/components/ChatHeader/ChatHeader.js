import React from "react";
import { BackToHome } from "../BackToHome/BackToHome";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  SubText,
} from "./ChatHeader.styles";

export const ChatHeader = ({ user, secondUser }) => {
  return (
    <>
      <HeaderContainer>
        <BackToHome />
        <ProfileImage>
          <UserIcon
            bgHeightAndWidth={3.5}
            iconSize={3}
            iconMargin={1.5}
            user={secondUser}
          />
        </ProfileImage>
        <UserInfo>
          <SubText>Chatting with your</SubText>
          <UserName>{secondUser}-Self</UserName>
        </UserInfo>
      </HeaderContainer>
    </>
  );
};
