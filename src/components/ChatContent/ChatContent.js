import React from "react";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  MessageContainer,
  UserIconContainer,
  MessageContent,
} from "./ChatContent.styles";

export const ChatContent = ({ messages }) => {
  return (
    <>
      {messages.map((message, i) => (
        <MessageContainer key={i} user={message.user}>
          <UserIconContainer user={message.user}>
            <UserIcon
              bgHeightAndWidth={2}
              iconSize={1.5}
              iconMargin={0.75}
              user={message.user}
            />
          </UserIconContainer>

          <MessageContent>{message.text}</MessageContent>
        </MessageContainer>
      ))}
    </>
  );
};
