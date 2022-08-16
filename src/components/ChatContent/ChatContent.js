import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message, TypingIndicator } from "components";

const ChatContent = ({ user, isTyping, messages, chat }) => {
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
      {isTyping ? (
        <Message
          user={user}
          messageText={<TypingIndicator />}
          messageStatic={true}
        />
      ) : null}
      <div ref={bottomRef}></div>
    </>
  );
};

export default ChatContent;
