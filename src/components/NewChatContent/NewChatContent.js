import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message } from "components";
import { NewChatContainer } from "./NewChatContent.styles";

const NewChatContent = ({ tutorialMessages }) => {
  let bottomRef = useScrollToBottom(tutorialMessages);

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

      <div ref={bottomRef}></div>
    </NewChatContainer>
  );
};

export default NewChatContent;
