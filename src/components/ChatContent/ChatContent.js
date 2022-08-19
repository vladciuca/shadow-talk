import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message, TypingIndicator } from "components";

const ChatContent = ({ user, isTyping, autoTyping, messages, chat }) => {
  // SOLVED: when updating messages by using an option the hook should not trigger
  // the trigger does not trigger when user isTyping
  let bottomRef = useScrollToBottom([messages.length, isTyping, autoTyping]);

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
          messageStatic={message.static}
          messageIntegrate={message.integrate}
        />
      ))}
      {isTyping ? (
        <Message
          user={user}
          messageText={<TypingIndicator />}
          messageStatic={true}
        />
      ) : null}
      {autoTyping ? (
        <Message
          user={"Past"}
          messageText={<TypingIndicator />}
          messageStatic={true}
        />
      ) : null}
      <div ref={bottomRef}></div>
    </>
  );
};

export default ChatContent;
