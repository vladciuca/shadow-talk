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
  } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserNrOfMessages, setCurrentUserNrOfMessages] = useState("");
  const [secondUserNrOfMessages, setSecondUserNrOfMessages] = useState("");
  const [nrOfIntegrations, setNrOfIntegrations] = useState();

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

  // MESSAGE INFO FUNCTIONS

  const getNrOfMessages = () => {
    // const nrOfMessagesCurrentUser = chat.messages.filter(
    //   (message) => message.user === currentUser
    // ).length;

    // setCurrentUserNrOfMessages(nrOfMessagesCurrentUser);

    const nrOfMessagesSecondUser = chat.messages.filter(
      (message) => message.user === secondUser()
    ).length;

    setSecondUserNrOfMessages(nrOfMessagesSecondUser);
  };

  // HINTS FEATURE

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

  // delete auto message if its the last message in the chat
  const deleteHintAutoMessage = async () => {
    if (chat.messages[chat.messages.length - 1].hintMessage) {
      const autoHintMessage = chat.messages[chat.messages.length - 1];
      deleteMessage(chat, autoHintMessage.id);
    }
  };

  // const sendMessage = async () => {
  //   await deleteHintAutoMessage();
  //   sendHintAutoMessage();
  // };

  const handleHints = () => {
    if (autoTyping) {
      console.log("i am auto typing, cant send another msj");
      return;
    }

    inputRef.current.focus();

    deleteHintAutoMessage();

    if (!chat.messages[chat.messages.length - 1].hintMessage) {
      sendHintAutoMessage();
    }

    // sendHintAutoMessage();
  };

  // RESOLVE FEATURE

  const showResolve = () => {
    const enoughMessagesFromPast =
      chat.messages.filter((message) => message.user === "Past").length >= 10;
    const enoughMessagesFromPresent =
      chat.messages.filter((message) => message.user === "Present").length >=
      10;

    // you enabled integrate! TO DO: add info notification
    if (enoughMessagesFromPast && enoughMessagesFromPresent) {
      setShowStateSwitch(true);
    } else {
      setShowStateSwitch(false);
    }
  };

  //maybe move into STORE
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

    // if no message follows the info message, delete info message
    deleteResolveAutoMessage();
  };

  useEffect(() => {
    inputRef.current.focus();
    setCurrentUser("Present");
  }, []);

  useEffect(() => {
    getNrOfMessages();
    //maybe move integrations from here
    setNrOfIntegrations(getNrOfIntegrations(chat));
  }, [getChat, switchUser]);

  useEffect(() => {
    getNrOfMessages();
    setNrOfIntegrations(getNrOfIntegrations(chat));

    showResolve();
    changeStatus();

    if (!chat.messages.find((message) => message.resolve === true)) {
      changeChatResolve(chat.id, false);
    }
  }, [chat.messages]);

  useEffect(() => {
    changeStatus();
  }, [chat.resolve]);

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
          secondUserNrOfMessages={secondUserNrOfMessages}
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
          // currentUserNrOfMessages={currentUserNrOfMessages}
          nrOfIntegrations={nrOfIntegrations}
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
