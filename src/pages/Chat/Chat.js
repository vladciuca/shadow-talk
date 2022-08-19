import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, ChatContent, ChatFooter } from "components";
import { clear } from "@testing-library/user-event/dist/clear";

const Chat = () => {
  const { getChat, addNewMessage, deleteMessage } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoTyping, setAutoTyping] = useState(false);

  const [navigateNotAllowed, setNavigateNotAllowed] = useState(false);
  const [integrate, setIntegrate] = useState(false);

  const [lastMessage, setLastMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const { id } = useParams();
  const chat = getChat(id);
  const inputRef = useRef();

  const startIntegrate = () => {
    setIntegrate(!integrate);
    setNavigateNotAllowed(!navigateNotAllowed);
    inputRef.current.focus();

    //send info message

    if (!integrate) {
      const autoMessage = {
        id: v4(),
        user: "Past",
        message: "What would you do in my place?",
        highlight: false,
        integrate: true,
      };

      setAutoTyping(true);

      let interval = setInterval(() => {
        addNewMessage(chat, autoMessage);
        setAutoTyping(false);
        clearInterval(interval);
      }, 1000);

      setInfoMessage(autoMessage);
    }

    //if no message follows the info message, delete info message
    if (lastMessage.id === infoMessage.id) {
      deleteMessage(chat, infoMessage.id);
    }
  };

  useEffect(() => {
    setLastMessage(chat.messages[chat.messages.length - 1]);
  }, [addNewMessage]);

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
    if (navigateNotAllowed) {
      return;
    }
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
      integrate,
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
      header={
        <ChatHeader
          secondUser={secondUser()}
          topic={chat.topic}
          integrate={integrate}
          startIntegrate={startIntegrate}
          autoTyping={autoTyping}
        />
      }
      content={
        <ChatContent
          chat={chat}
          messages={chat.messages}
          user={currentUser}
          isTyping={isTyping}
          autoTyping={autoTyping}
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
          navigateNotAllowed={navigateNotAllowed}
        />
      }
    />
  );
};

export default Chat;
