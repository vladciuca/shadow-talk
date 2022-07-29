import React from "react";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  SubText,
  AppInfoContainer,
} from "./Header.styles";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
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
        <AppInfoContainer>info</AppInfoContainer>
      </HeaderContainer>
    </>
  );
};
