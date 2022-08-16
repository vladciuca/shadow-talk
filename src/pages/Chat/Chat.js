import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, ChatContent, ChatFooter } from "components";

const Chat = () => {
  const { getChat, addNewMessage } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { id } = useParams();
  const chat = getChat(id);
  const inputRef = useRef();

  useEffect(() => {
    setCurrentUser("Present");
  }, []);

  const secondUser = () => {
    if (currentUser === "Present") {
      return "Past";
    } else {
      return "Present";
    }
  };

  const switchUser = () => {
    if (currentUser === "Present") {
      setCurrentUser("Past");
    } else {
      setCurrentUser("Present");
    }
  };

  const handleNewMessage = (e) => {
    setNewMessage(e);
  };

  const handleNewMessageSubmit = () => {
    if (newMessage === "") {
      return;
    }

    addNewMessage(chat, {
      id: v4(),
      user: currentUser,
      message: newMessage,
      highlight: false,
    });

    setNewMessage("");
  };

  useEffect(() => {
    if (newMessage === "") {
      setIsTyping(false);
    } else {
      setIsTyping(true);
    }
  }, [newMessage]);

  return (
    <Screen
      header={<ChatHeader secondUser={secondUser()} topic={chat.topic} />}
      content={
        <ChatContent
          chat={chat}
          messages={chat.messages}
          user={currentUser}
          isTyping={isTyping}
        />
      }
      chatContent={true}
      footer={
        <ChatFooter
          inputRef={inputRef}
          user={currentUser}
          secondUser={secondUser()}
          switchUser={switchUser}
          newMessage={newMessage}
          handleNewMessage={handleNewMessage}
          handleNewMessageSubmit={handleNewMessageSubmit}
        />
      }
    />
  );
};

export default Chat;
