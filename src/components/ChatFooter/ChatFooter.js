import React, { useEffect, useRef } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { UserChatInput, Button } from "components";
import { FooterContainer, SwitchUserContainer } from "./ChatFooter.styles";

const ChatFooter = ({ chat, user, secondUser, switchUser }) => {
  const inputRef = useRef();

  const handleSwitchUser = () => {
    switchUser();
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <FooterContainer>
        <UserChatInput chat={chat} user={user} inputRef={inputRef} />

        <SwitchUserContainer>
          <Button
            user={user}
            icon={<CgArrowsExchangeAlt />}
            text={`Switch to
            ${secondUser}-Self`}
            handleClick={handleSwitchUser}
          />
        </SwitchUserContainer>
      </FooterContainer>
    </>
  );
};

export default ChatFooter;
