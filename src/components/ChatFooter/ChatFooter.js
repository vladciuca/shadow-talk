import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import {
  FooterContainer,
  SwitchUserContainer,
  SwitchUserButton,
  SwitchIcon,
  UserInputContainer,
  UserImage,
  InputContainer,
  SendMessageContainer,
  SendMessageButton,
} from "./ChatFooter.styles";
import { UserIcon } from "../UserIcon/UserIcon";

export const ChatFooter = ({
  user,
  secondUser,
  switchUser,
  handleChange,
  handleValue,
  handleSubmit,
  submitNotAllowed,
}) => {
  return (
    <>
      <FooterContainer>
        <UserInputContainer onSubmit={handleSubmit}>
          <UserImage>
            <UserIcon
              bgHeightAndWidth={2.5}
              iconSize={2}
              iconMargin={1}
              user={user}
            />
          </UserImage>
          <InputContainer>
            <input
              type="text"
              placeholder={`Chatting as: ${user}-self`}
              onChange={handleChange}
              value={handleValue}
            />
          </InputContainer>
          <SendMessageContainer>
            <SendMessageButton
              onClick={handleSubmit}
              submitNotAllowed={submitNotAllowed}
            >
              <IoSend />
            </SendMessageButton>
          </SendMessageContainer>
        </UserInputContainer>
        <SwitchUserContainer>
          <SwitchUserButton onClick={switchUser}>
            <SwitchIcon>
              <TbArrowsLeftRight />
            </SwitchIcon>
            Switch to
            <span>{secondUser}-self</span>
          </SwitchUserButton>
        </SwitchUserContainer>
      </FooterContainer>
    </>
  );
};
