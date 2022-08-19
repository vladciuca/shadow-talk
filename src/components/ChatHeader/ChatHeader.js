import React from "react";
import Switch from "react-switch";
import { AiFillCheckCircle, AiFillQuestionCircle } from "react-icons/ai";
import { BackToHome, UserIcon } from "components";
import { theme } from "../../theme";
import {
  HeaderContainer,
  ProfileImage,
  UserInfo,
  UserName,
  SubText,
  Topic,
  TopicText,
  SwitchTextUnchecked,
  SwitchTextChecked,
  SwitchHandleIcon,
} from "./ChatHeader.styles";

const ChatHeader = ({
  secondUser,
  topic,
  tutorial,
  integrate,
  startIntegrate,
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
        </ProfileImage>
        <UserInfo>
          <SubText>Chatting with your</SubText>
          <UserName>
            {secondUser}-Self
            {secondUser === "Past" && !tutorial ? (
              <Switch
                disabled={autoTyping}
                checked={integrate}
                onChange={startIntegrate}
                height={20}
                width={85}
                handleDiameter={20}
                onColor={theme.positive}
                uncheckedIcon={
                  <SwitchTextUnchecked>Integrate</SwitchTextUnchecked>
                }
                uncheckedHandleIcon={
                  <SwitchHandleIcon>
                    <AiFillQuestionCircle color="gray" />
                  </SwitchHandleIcon>
                }
                checkedIcon={<SwitchTextChecked>Integrate</SwitchTextChecked>}
                checkedHandleIcon={
                  <SwitchHandleIcon>
                    <AiFillCheckCircle color={theme.positive} />
                  </SwitchHandleIcon>
                }
              />
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
