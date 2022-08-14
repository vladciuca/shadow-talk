import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, NewChatContent, NewChatFooter } from "components";

const NewChat = () => {
  const { addNewChat } = useContext(ChatListContext);
  const [topic, setTopic] = useState("");
  const [navigateNotAllowed, setNavigateNotAllowed] = useState(true);

  let navigate = useNavigate();

  const handleTopic = (e) => {
    if (e.target.value === "") {
      setNavigateNotAllowed(true);
    } else {
      setNavigateNotAllowed(false);
    }
    setTopic(e.target.value);
  };

  const goToNewChat = () => {
    if (topic === "") {
      return;
    }
    const newChat = {
      id: v4(),
      date: new Date().toLocaleDateString(),
      resolved: false,
      topic,
      messages: [],
    };

    addNewChat(newChat);
    navigate(`/chat/${newChat.id}`);
  };

  return (
    <Screen
      header={<ChatHeader secondUser={"Past"} />}
      content={<NewChatContent topic={topic} handleTopic={handleTopic} />}
      footer={
        <NewChatFooter
          addNewChat={goToNewChat}
          navigateNotAllowed={navigateNotAllowed}
        />
      }
    />
  );
};

export default NewChat;
