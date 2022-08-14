import React from "react";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message } from "../Message/Message";
import { UserIcon } from "../UserIcon/UserIcon";
import { NewChatContainer, InputContainer } from "./NewChatContent.styles";

export const NewChatContent = ({ topic, handleTopic }) => {
  let bottomRef = useScrollToBottom();

  return (
    <NewChatContainer>
      <Message user={"Past"} messageText={"Hi there!"} messageStatic={true} />
      <Message
        user={"Past"}
        messageText={
          " I'm your Past-Self. You know... the former version of yourself that you might still blame for certain outcomes in your current life."
        }
        messageStatic={true}
      />

      <Message
        user={"Past"}
        messageText={
          "Talk to me and lets try to resolve this issues that you fell are still affecting us so we can move froward!"
        }
        messageStatic={true}
      />
      <Message
        user={"Past"}
        messageText={
          "What do you wanna chat about? Let's choose a topic to start working on."
        }
        messageStatic={true}
      />
      <InputContainer>
        <UserIcon
          bgHeightAndWidth={2}
          iconSize={1.5}
          iconMargin={0.75}
          user={"Present"}
        />
        <input
          type="text"
          placeholder="Choose a Topic to continue"
          onChange={handleTopic}
          value={topic}
        />
      </InputContainer>
      <Message
        user={"Past"}
        messageText={"Great! Now lets Continue and get to the bottom of this!"}
        messageStatic={true}
      />
      <Message
        user={"Past"}
        messageText={
          "Oh, and by the way, you can swap between me and your Present-Self at anytime you want!"
        }
        messageStatic={true}
      />
      <div ref={bottomRef}></div>
    </NewChatContainer>
  );
};
