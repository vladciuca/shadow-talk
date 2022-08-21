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
    updateChatStatus,
  } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoTyping, setAutoTyping] = useState(false);

  const [showStateSwitch, setShowStateSwitch] = useState(false);

  const { id } = useParams();
  const chat = getChat(id);
  const inputRef = useRef();

  // HINTS FEATURE

  const sendHintAutoMessage = () => {
    inputRef.current.focus();

    const autoHintMessages = [
      {
        text: "Why are you doing this?",
      },
      {
        text: "What do you want from me?",
      },
      {
        text: "What are you trying to protect me from?",
      },
    ];

    const selectRandomMessage =
      autoHintMessages[Math.floor(Math.random() * autoHintMessages.length)];

    const autoHintMessage = {
      id: v4(),
      user: "Present",
      message: selectRandomMessage.text,
    };

    setAutoTyping(true);

    let interval = setInterval(() => {
      addNewMessage(chat, autoHintMessage);
      setAutoTyping(false);
      clearInterval(interval);
    }, 1000);
  };

  // RESOLVE FEATURE

  const showResolve = () => {
    const enoughMessagesFromPast =
      chat.messages.filter((message) => message.user === "Past").length >= 5;
    const enoughMessagesFromPresent =
      chat.messages.filter((message) => message.user === "Present").length >= 5;

    // you enabled integrate! TO DO: add info notification
    if (enoughMessagesFromPast && enoughMessagesFromPresent) {
      setShowStateSwitch(true);
    } else {
      setShowStateSwitch(false);
    }
  };

  const changeStatus = () => {
    //STATUS: In Progress...
    if (!chat.resolve) {
      updateChatStatus(chat.id, "Discussing...");
    }
    //STATUS: Resolving...
    if (
      chat.resolve &&
      chat.messages[chat.messages.length - 1].autoResolveMessage
    ) {
      updateChatStatus(chat.id, "Integrating...");
    }
    //STATUS: Resolved
    if (
      chat.resolve &&
      chat.messages[chat.messages.length - 1].resolve &&
      chat.messages[chat.messages.length - 1].user === "Present"
    ) {
      updateChatStatus(chat.id, "Resolved");
    }
  };

  // delete auto message if its the last message in the chat
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
    toggleChatResolve(chat.id);

    inputRef.current.focus();

    if (chat.resolve) {
      sendResolveAutoMessage();
    }

    // if no message follows the info message, delete info message
    deleteResolveAutoMessage();
  };

  useEffect(() => {
    inputRef.current.focus();
    setCurrentUser("Present");
  }, []);

  useEffect(() => {
    showResolve();
    changeStatus();

    if (!chat.messages.find((message) => message.resolve === true)) {
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
    if (newMessage.length >= 1) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [newMessage]);

  return (
    <Screen
      header={
        <ChatHeader
          secondUser={secondUser()}
          topic={chat.topic}
          sendHintAutoMessage={sendHintAutoMessage}
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
          secondUser={secondUser()}
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
