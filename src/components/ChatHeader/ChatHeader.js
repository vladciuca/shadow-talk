import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { BackToHome, UserIcon, ChatStatusSwitch } from "components";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  NrOfMessages,
  SubText,
  Topic,
  TopicText,
  Hint,
} from "./ChatHeader.styles";

const ChatHeader = ({
  secondUser,
  secondUserNrOfMessages,
  topic,
  tutorial,
  handleHints,
  showStateSwitch,
  resolve,
  toggleResolve,
  chatStatus,
  autoTyping,
}) => {
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
          <NrOfMessages>
            <span>{secondUserNrOfMessages}</span>
            <RiMessage2Fill />
          </NrOfMessages>
        </ProfileImage>
        <UserInfo>
          <SubText>Chatting with your</SubText>
          <UserName>
            {secondUser}-Self
            {secondUser === "Past" && !tutorial && showStateSwitch ? (
              <ChatStatusSwitch
                resolve={resolve}
                toggleResolve={toggleResolve}
                chatStatus={chatStatus}
                autoTyping={autoTyping}
              />
            ) : null}
            {secondUser === "Present" && !tutorial ? (
              <Hint autoTyping={autoTyping} onClick={handleHints}>
                Hints
              </Hint>
            ) : null}
          </UserName>
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
