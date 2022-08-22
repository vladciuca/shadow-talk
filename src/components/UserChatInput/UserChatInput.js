import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { UserIcon } from "components";
import {
  UserInputContainer,
  UserImage,
  InputContainer,
  SendMessageContainer,
  SendMessageButton,
  NrOfMessages,
} from "./UserChatInput.styles";

const UserChatInput = ({
  topicInput,
  topic,
  handleTopic,
  handleTopicSubmit,
  chatInput,
  newMessage,
  handleNewMessage,
  handleNewMessageSubmit,
  user,
  resolve,
  inputRef,
  currentUserNrOfMessages,
}) => {
  const [submitNotAllowed, setSubmitNotAllowed] = useState(true);

  const handleChange = (e) => {
    if (e !== "") {
      setSubmitNotAllowed(false);
    } else {
      setSubmitNotAllowed(true);
    }
    if (chatInput) {
      handleNewMessage(e);
    }
    if (topicInput) {
      handleTopic(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (chatInput) {
      handleNewMessageSubmit();
    }

    if (topicInput) {
      handleTopicSubmit();
    }

    inputRef.current.focus();
    setSubmitNotAllowed(true);
  };

  return (
    <UserInputContainer onSubmit={(e) => handleSubmit(e)}>
      <UserImage>
        <UserIcon
          bgHeightAndWidth={2}
          iconSize={1.5}
          iconMargin={0.85}
          user={user}
        />
        <NrOfMessages>
          <span>{currentUserNrOfMessages}</span>
          <RiMessage2Fill />
        </NrOfMessages>
      </UserImage>
      <InputContainer resolve={resolve}>
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
