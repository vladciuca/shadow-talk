import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message, TypingIndicator } from "components";

const ChatContent = ({ user, isTyping, autoTyping, chat, secondUser }) => {
  let bottomRef = useScrollToBottom({
    chatLength: chat.messages.length,
    // TO DO: fix the user trigger for scroll to bottom
    userTyping: isTyping,
    autoTyping: autoTyping,
  });

  return (
    <>
      {chat.messages.map((message) => (
        <Message
          key={message.id}
          messageId={message.id}
          user={message.user}
          chat={chat}
          messageText={message.message}
          messageHighlight={message.highlight}
          messageStatic={message.static}
          messageResolve={message.resolve}
        />
      ))}
      {isTyping ? (
        <Message
          user={user}
          messageText={<TypingIndicator />}
          messageStatic={true}
          messageResolve={chat.resolve}
        />
      ) : null}
      {autoTyping ? (
        <Message
          user={secondUser}
          messageText={<TypingIndicator />}
          messageStatic={true}
          messageResolve={chat.resolve}
        />
      ) : null}
      <div ref={bottomRef}></div>
    </>
  );
};

export default ChatContent;
