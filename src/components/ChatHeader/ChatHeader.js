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

export const ChatHeader = () => {
  return (
    <>
      <HeaderContainer>
        <BackToHome />
        <ProfileImage>
          <UserIcon
            bgHeightAndWidth={3.5}
            iconSize={3}
            // iconColor={iconColor}
            iconMargin={1.5}
          />
        </ProfileImage>
        <UserInfo>
          <SubText>Chatting with your</SubText>
          <UserName>Past-Self</UserName>
        </UserInfo>
      </HeaderContainer>
    </>
  );
};
