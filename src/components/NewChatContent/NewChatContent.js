import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message, TypingIndicator } from "components";
import { NewChatContainer } from "./NewChatContent.styles";

const NewChatContent = ({ tutorialMessages, tutorialTyping, userTyping }) => {
  let bottomRef = useScrollToBottom([tutorialMessages, userTyping]);

  return (
    <NewChatContainer>
      {tutorialMessages?.map((message, i) => {
        return (
          <Message
            key={i}
            user={message.user}
            messageText={message.message}
            messageStatic={message.static}
          />
        );
      })}
      {tutorialTyping ? (
        <Message
          user={"Past"}
          messageText={<TypingIndicator />}
          messageStatic={true}
        />
      ) : null}
      {userTyping ? (
        <Message
          user={"Present"}
          messageText={<TypingIndicator />}
          messageStatic={true}
        />
      ) : null}
      <div ref={bottomRef}></div>
    </NewChatContainer>
  );
};

export default NewChatContent;
