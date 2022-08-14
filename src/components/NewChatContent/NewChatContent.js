import React, { useState, useEffect } from "react";
import { TbUserExclamation } from "react-icons/tb";
import useScrollToBottom from "../../hooks/useScrollToBottom";
import { Message } from "../../components";
import { UserIcon } from "../UserIcon/UserIcon";
import { NewChatContainer, InputContainer } from "./NewChatContent.styles";

const tutorialMessages = [
  {
    user: "Past",
    message: "Hi there!",
    static: true,
  },
  {
    user: "Past",
    message:
      "I'm your Past-Self. You know... the former version of yourself that you might still blame for certain outcomes in your current life.",
    static: true,
  },
  {
    user: "Past",
    message:
      "Talk to me and lets try to resolve this issues that you fell are still affecting us so we can move froward!",
    static: true,
  },
  {
    user: "Past",
    message:
      "What do you wanna chat about? Let's choose a topic to start working on.",
    static: true,
  },
];

const NewChatContent = ({ topic, handleTopic }) => {
  const [messages, setMessages] = useState([]);

  const addTutMessageDelay = () => {
    // for (let i = 0; i < tutorialMessages.length; i++) {
    //   console.log(i);
    //   console.log(tutorialMessages[i]);
    //   // setInterval(() => {
    //   // }, 5000);
    // }
  };

  useEffect(() => {
    // setInterval(
    //   () =>
    //     setMessages((current) => [
    //       ...current,
    //       { user: "Past", message: "msj", static: true },
    //     ]),
    //   3000
    // );
  }, []);

  let bottomRef = useScrollToBottom(messages);

  return (
    <NewChatContainer>
      {/* <Message user={"Past"} messageText={"Hi there!"} messageStatic={true} />
      <Message
        user={"Past"}
        messageText={
          "I'm your Past-Self. You know... the former version of yourself that you might still blame for certain outcomes in your current life."
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
      /> */}
      {/* {messages.map((message, index) => {
        return <p key={index}>{message}</p>;
      })} */}
      {messages?.map((message, index) => {
        return (
          <Message
            key={index}
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
