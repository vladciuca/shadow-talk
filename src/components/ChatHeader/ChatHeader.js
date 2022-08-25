import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BackToHome, UserIcon, ChatStatusSwitch } from "components";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  UserStats,
  Stat,
  SubText,
  Topic,
  TopicText,
  Hint,
} from "./ChatHeader.styles";

const ChatHeader = ({
  secondUser,
  secondUserNrOfMessages,
  secondUserNrOfHighlights,
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

          {!tutorial ? (
            <UserStats>
              <Stat>
                <span>{secondUserNrOfMessages}</span>
                <RiMessage2Fill />
              </Stat>
              {secondUserNrOfHighlights < 1 ? null : (
                <Stat>
                  <span>{secondUserNrOfHighlights}</span>
                  <AiFillStar />
                </Stat>
              )}
            </UserStats>
          ) : null}
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
