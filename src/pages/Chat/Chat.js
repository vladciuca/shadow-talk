import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, ChatContent, ChatFooter } from "components";

const Chat = () => {
  const {
    getChat,
    addNewMessage,
    deleteMessage,
    toggleChatResolve,
    changeChatResolve,
    changeChatStatus,
  } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoTyping, setAutoTyping] = useState(false);

  const [showStateSwitch, setShowStateSwitch] = useState(false);

  const { id } = useParams();
  const chat = getChat(id);
  const inputRef = useRef();

  // RESOLVE FEATURE

  const showResolve = () => {
    const enoughMessagesFromPast =
      chat.messages.filter((message) => message.user === "Past").length >= 5;
    const enoughMessagesFromPresent =
      chat.messages.filter((message) => message.user === "Present").length >= 5;

    // you have progressed enough to start integrating the resolve! TO DO: add info notification
    if (enoughMessagesFromPast && enoughMessagesFromPresent) {
      setShowStateSwitch(true);
    } else {
      setShowStateSwitch(false);
    }
  };

  const changeStatus = () => {
    //STATUS: In Progress...
    if (!chat.resolve) {
      changeChatStatus(chat.id, "In Progress...");
    }
    //STATUS: Resolving...
    if (
      chat.resolve &&
      chat.messages[chat.messages.length - 1].autoResolveMessage
    ) {
      changeChatStatus(chat.id, "Integrating...");
    }
    //STATUS: Resolved
    if (
      chat.resolve &&
      chat.messages[chat.messages.length - 1].resolve &&
      chat.messages[chat.messages.length - 1].user === "Present"
    ) {
      changeChatStatus(chat.id, "Resolved");
    }
  };

  const deleteResolveAutoMessage = () => {
    if (chat.messages[chat.messages.length - 1].autoResolveMessage) {
      const autoResolveMessage = chat.messages[chat.messages.length - 1];
      deleteMessage(chat, autoResolveMessage.id);
    }
  };

  const sendResolveAutoMessage = () => {
    const autoResolveMessages = [
      {
        text: "What would you do in my place?",
      },
      {
        text: "What would you do differently now?",
      },
      {
        text: "How would you have handled this?",
      },
    ];

    const selectRandomMessage =
      autoResolveMessages[
        Math.floor(Math.random() * autoResolveMessages.length)
      ];

    const autoResolveMessage = {
      id: v4(),
      user: "Past",
      message: selectRandomMessage.text,
      resolve: true,
      autoResolveMessage: true,
    };

    setAutoTyping(true);

    let interval = setInterval(() => {
      addNewMessage(chat, autoResolveMessage);
      setAutoTyping(false);
      clearInterval(interval);
    }, 1000);
  };

  const toggleResolve = () => {
    //TEMP: CONDITION TO EXPAND ON LATER, button should show before a decent chat length
    if (chat.messages < 1) {
      return;
    }

    toggleChatResolve(chat.id);

    inputRef.current.focus();

    if (chat.resolve) {
      sendResolveAutoMessage();
    }

    //if no message follows the info message, delete info message
    deleteResolveAutoMessage();
  };

  useEffect(() => {
    inputRef.current.focus();
    setCurrentUser("Present");
  }, []);

  useEffect(() => {
    showResolve();
    changeStatus();

    if (chat.messages.find((message) => message.resolve === true)) {
      // console.log("has resolve");
    } else {
      // console.log("no resolve");
      changeChatResolve(chat.id, false);
    }
  }, [chat.messages]);

  useEffect(() => {
    changeStatus();
  }, [chat.resolve]);

  // USER FUNCTIONS

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

  // MESSAGE FUNCTIONS

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
      resolve: chat.resolve,
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
          resolve={chat.resolve}
          showStateSwitch={showStateSwitch}
          toggleResolve={toggleResolve}
          chatStatus={chat.status}
          autoTyping={autoTyping}
        />
      }
      content={
        <ChatContent
          chat={chat}
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
          resolve={chat.resolve}
          chatStatus={chat.status}
          toggleResolve={toggleResolve}
        />
      }
    />
  );
};

export default Chat;
