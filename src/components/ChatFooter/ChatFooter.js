import React, { useRef } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { UserChatInput } from "components";
import {
  FooterContainer,
  SwitchUserContainer,
  SwitchUserButton,
  SwitchIcon,
} from "./ChatFooter.styles";

const ChatFooter = ({ chat, user, secondUser, switchUser }) => {
  const inputRef = useRef();
  return (
    <>
      <FooterContainer>
        <UserChatInput chat={chat} user={user} inputRef={inputRef} />

        <SwitchUserContainer>
          <SwitchUserButton
            onClick={() => {
              switchUser();
              inputRef.current.focus();
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

export default ChatFooter;
