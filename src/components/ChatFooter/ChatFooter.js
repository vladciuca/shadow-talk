import React, { useEffect } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { UserChatInput, Button } from "components";
import { FooterContainer, SwitchUserContainer } from "./ChatFooter.styles";

const ChatFooter = ({
  newMessage,
  handleNewMessage,
  handleNewMessageSubmit,
  user,
  inputRef,
  secondUser,
  switchUser,
}) => {
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
        <UserChatInput
          chatInput={true}
          newMessage={newMessage}
          handleNewMessage={handleNewMessage}
          handleNewMessageSubmit={handleNewMessageSubmit}
          user={user}
          inputRef={inputRef}
        />

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
