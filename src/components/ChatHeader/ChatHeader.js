import React from "react";
import { BackToHome, UserIcon } from "components";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  SubText,
  Topic,
  TopicText,
} from "./ChatHeader.styles";

const ChatHeader = ({ secondUser, topic }) => {
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
          {topic ? (
            <Topic>
              <span>about:</span>
              <TopicText>{topic}</TopicText>
            </Topic>
          ) : null}
        </UserInfo>
      </HeaderContainer>
    </>
  );
};

export default ChatHeader;
