import React, { useRef } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { UserChatInput } from "../UserChatInput/UserChatInput";
import {
  FooterContainer,
  SwitchUserContainer,
  SwitchUserButton,
  SwitchIcon,
} from "./ChatFooter.styles";

export const ChatFooter = ({ chat, user, secondUser, switchUser }) => {
  const input = useRef();
  return (
    <>
      <FooterContainer>
        <UserChatInput chat={chat} user={user} inputRef={input} />

        <SwitchUserContainer>
          <SwitchUserButton
            onClick={() => {
              switchUser();
              input.current.focus();
            }}
          >
            <SwitchIcon>
              <TbArrowsLeftRight />
            </SwitchIcon>
            Switch to
            <span>{secondUser}-Self</span>
          </SwitchUserButton>
        </SwitchUserContainer>
      </FooterContainer>
    </>
  );
};
