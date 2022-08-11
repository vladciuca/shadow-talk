import React from "react";
import { Message } from "../Message/Message";

export const ChatContent = ({ messages, chat }) => {
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
    </>
  );
};
