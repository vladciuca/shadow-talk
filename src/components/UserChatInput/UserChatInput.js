import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { IoSend } from "react-icons/io5";
import { UserIcon } from "components";
import {
  UserInputContainer,
  UserImage,
  InputContainer,
  SendMessageContainer,
  SendMessageButton,
} from "./UserChatInput.styles";

const UserChatInput = ({
  topicInput,
  topic,
  handleTopic,
  handleTopicSubmit,
  chat,
  user,
  inputRef,
}) => {
  const { addNewMessage } = useContext(ChatListContext);
  const [newMessage, setNewMessage] = useState("");
  const [submitNotAllowed, setSubmitNotAllowed] = useState(true);

  const handleChange = (e) => {
    if (e !== "") {
      setSubmitNotAllowed(false);
    } else {
      setSubmitNotAllowed(true);
    }
    if (chat) {
      setNewMessage(e);
    }
    if (topicInput) {
      handleTopic(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // only in CHAT PAGE
    if (chat) {
      if (newMessage === "") {
        return;
      }

      addNewMessage(chat, {
        id: v4(),
        user,
        message: newMessage,
        highlight: false,
      });
    }

    if (topicInput) {
      //HANDLE TOPIC SUBMIT
      handleTopicSubmit();
    }

    setNewMessage("");
    setSubmitNotAllowed(true);
  };

  return (
    <UserInputContainer onSubmit={(e) => handleSubmit(e)}>
      <UserImage>
        <UserIcon
          bgHeightAndWidth={2}
          iconSize={1.5}
          iconMargin={0.75}
          user={user}
        />
      </UserImage>
      <InputContainer>
        <input
          ref={inputRef}
          type="text"
          placeholder={
            topicInput
              ? "Choose a Topic to continue"
              : `Chatting as: ${user}-Self`
          }
          onChange={(e) => handleChange(e.target.value)}
          value={topicInput ? topic : newMessage}
        />
      </InputContainer>
      <SendMessageContainer>
        <SendMessageButton
          onClick={(e) => handleSubmit(e)}
          submitNotAllowed={submitNotAllowed}
        >
          <IoSend />
        </SendMessageButton>
      </SendMessageContainer>
    </UserInputContainer>
  );
};

export default UserChatInput;
