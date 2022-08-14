import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message } from "../Message/Message";

export const ChatContent = ({ messages, chat }) => {
  let bottomRef = useScrollToBottom(messages);

  return (
    <>
      {messages.map((message) => (
        <Message
          key={message.id}
          messageId={message.id}
          user={message.user}
          chat={chat}
          messageText={message.message}
          messageHighlight={message.highlight}
        />
      ))}
      <div ref={bottomRef}></div>
    </>
  );
};
