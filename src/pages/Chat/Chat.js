import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "Store";
import { Screen, ChatHeader, ChatContent, ChatFooter } from "components";

const Chat = () => {
  const {
    getChat,
    addNewMessage,
    deleteMessage,
    toggleChatResolve,
    changeChatResolve,
    updateChatStatus,
    getNrOfIntegrations,
    getMessagesByUser,
  } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState(null);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoTyping, setAutoTyping] = useState(false);

  const [showStateSwitch, setShowStateSwitch] = useState(false);

  const { id } = useParams();
  const chat = getChat(id);
  const inputRef = useRef();

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

  useEffect(() => {
    inputRef.current.focus();
    setCurrentUser("Present");
  }, []);

  // HINT FEATURE

  const sendHintAutoMessage = () => {
    const autoHintMessages = [
      {
        text: "Why are you doing this to us?",
      },
      {
        text: "What do you want from me?",
      },
      {
        text: "What do you want to tell me?",
      },
      {
        text: "What are you trying to protect me from?",
      },
      {
        text: "How is this helping me?",
      },
      {
        text: "Why did you act that way?",
      },
      {
        text: "How did that make you feel?",
      },
      {
        text: "What are you seeing that I don't see?",
      },
      {
        text: "What is the good intention behind your actions?",
      },
      {
        text: "What is the purpose of this pain?",
      },
      {
        text: "What is the good that came out of this?",
      },
      {
        text: "How can you help me?",
      },
      {
        text: "Why is this still affecting me?",
      },
      {
        text: "What are you trying to show me?",
      },
    ];

    const selectRandomMessage =
      autoHintMessages[Math.floor(Math.random() * autoHintMessages.length)];

    const autoHintMessage = {
      id: v4(),
      user: "Present",
      message: selectRandomMessage.text,
      hintMessage: true,
    };

    setAutoTyping(true);

    let interval = setInterval(() => {
      addNewMessage(chat, autoHintMessage);
      setAutoTyping(false);
      clearInterval(interval);
    }, 1000);
  };

  const handleHints = () => {
    if (autoTyping) {
      return;
    }
    inputRef.current.focus();

    // remove auto message if its the last message in the chat
    if (
      chat.messages.length >= 1 &&
      chat.messages[chat.messages.length - 1].hintMessage
    ) {
      chat.messages.pop();
    }

    sendHintAutoMessage();
  };

  // RESOLVE FEATURE

  const showResolve = () => {
    const enoughMessagesFromPast = getMessagesByUser(chat, "Past").length >= 5;
    const enoughMessagesFromPresent =
      getMessagesByUser(chat, "Present").length >= 5;

    if (enoughMessagesFromPast && enoughMessagesFromPresent) {
      setShowStateSwitch(true);
    } else {
      setShowStateSwitch(false);
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
      {
        text: "How would you respond to that?",
      },
      {
        text: "Put yourself in my place.",
      },
      {
        text: "How you would approach this?",
      },
      {
        text: "Tell me how you would of done it?",
      },
      {
        text: "Put yourself in my situation.",
      },
      {
        text: "I know there has to be a better way tackle this issue.",
      },
      {
        text: "If this would happen again, what wold you do?",
      },
      {
        text: "How to do it better next time?",
      },
      {
        text: "Lets switch places for a moment.",
      },
      {
        text: "What are you supposed to do?",
      },
      {
        text: "How should I have done it?",
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

  // delete auto message if its the last message in the chat
  const deleteResolveAutoMessage = () => {
    if (chat.messages[chat.messages.length - 1].autoResolveMessage) {
      const autoResolveMessage = chat.messages[chat.messages.length - 1];
      deleteMessage(chat, autoResolveMessage.id);
    }
  };

  const toggleResolve = () => {
    toggleChatResolve(chat.id);
    inputRef.current.focus();

    if (chat.resolve) {
      sendResolveAutoMessage();
    }

    // if no message follows the autoResolveMessage, delete message
    deleteResolveAutoMessage();
  };

  //Update Chat Status
  useEffect(() => {
    updateChatStatus(chat.id);
  }, [chat.resolve, chat.messages]);

  useEffect(() => {
    showResolve();
    //if there are no resolve messages, set Chat Resolve to false
    if (!chat.messages.find((message) => message.resolve === true)) {
      changeChatResolve(chat.id, false);
    }
  }, [chat.messages]);

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
          secondUserNrOfMessages={getMessagesByUser(chat, secondUser()).length}
          topic={chat.topic}
          handleHints={handleHints}
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
          nrOfIntegrations={getNrOfIntegrations(chat)}
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
