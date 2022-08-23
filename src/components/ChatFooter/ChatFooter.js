import React, { useEffect } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { UserChatInput, Button, ChatStatusInfo } from "components";
import { FooterContainer, SwitchUserContainer } from "./ChatFooter.styles";

const ChatFooter = ({
  newMessage,
  handleNewMessage,
  handleNewMessageSubmit,
  user,
  inputRef,
  secondUser,
  switchUser,
  resolve,
  chatStatus,
  toggleResolve,
  // currentUserNrOfMessages,
  nrOfIntegrations,
}) => {
  const handleSwitchUser = () => {
    switchUser();
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

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
          resolve={resolve}
          // currentUserNrOfMessages={currentUserNrOfMessages}
        />

        <SwitchUserContainer>
          {resolve ? (
            <ChatStatusInfo
              chatStatus={chatStatus}
              toggleResolve={toggleResolve}
              nrOfIntegrations={nrOfIntegrations}
            />
          ) : (
            <Button
              user={user}
              icon={<CgArrowsExchangeAlt />}
              text={`Switch to
            ${secondUser}-Self`}
              handleClick={handleSwitchUser}
            />
          )}
        </SwitchUserContainer>
      </FooterContainer>
    </>
  );
};

export default ChatFooter;
