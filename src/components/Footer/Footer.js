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
} from "./Footer.styles";
import { UserIcon } from "../UserIcon/UserIcon";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <UserInputContainer>
          <UserImage>
            <UserIcon
              bgHeightAndWidth={2.5}
              iconSize={2}
              // iconColor={iconColor}
              iconMargin={1}
            />
          </UserImage>
          <InputContainer>
            <input type="text" placeholder={`Chatting as: ${"Present-Self"}`} />
          </InputContainer>
          <SendMessageContainer>
            <SendMessageButton>
              <IoSend />
            </SendMessageButton>
          </SendMessageContainer>
        </UserInputContainer>
        <SwitchUserContainer>
          <SwitchUserButton>
            <SwitchIcon>
              <TbArrowsLeftRight />
            </SwitchIcon>
            Switch to
            <span>{"Past-Self"}</span>
          </SwitchUserButton>
        </SwitchUserContainer>
      </FooterContainer>
    </>
  );
};
