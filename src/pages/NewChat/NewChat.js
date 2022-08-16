import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, NewChatContent, NewChatFooter } from "components";

import {
  firstSequenceOfMessages,
  secondSequenceOfMessages,
} from "./tutorialMessages";

const NewChat = () => {
  const { addNewChat } = useContext(ChatListContext);

  const [firstSequence, setFirstSequence] = useState(firstSequenceOfMessages);
  const [secondSequence, setSecondSequence] = useState(
    secondSequenceOfMessages
  );
  const [startSecondSequence, setStartSecondSequence] = useState(false);

  const [topic, setTopic] = useState("");
  const [showTopicInput, setShowTopicInput] = useState(false);

  const [tutorialMessages, setTutorialMessages] = useState([]);

  const [navigateNotAllowed, setNavigateNotAllowed] = useState(true);

  const inputRef = useRef();

  const sendMessages = () => {
    let interval = setInterval(() => {
      if (firstSequence.length <= 1) {
        clearInterval(interval);
        setShowTopicInput(true);
      }

      const message = firstSequence.shift();

      setTutorialMessages((prev) => [...prev, message]);
    }, 1000);
  };

  useEffect(() => {
    sendMessages();
  }, []);

  useEffect(() => {
    if (showTopicInput) {
      inputRef.current.focus();
    }
  }, [showTopicInput]);

  //FOR DEVELOPMENT ONLY
  useEffect(() => {
    console.log(tutorialMessages);
  }, [tutorialMessages]);

  let navigate = useNavigate();

  //TO DO: HANDLE NAV TO ENABLE AFTER SECOND SEQUENCE
  const handleTopic = (e) => {
    console.log(e);
    if (e === "") {
      setNavigateNotAllowed(true);
    } else {
      setNavigateNotAllowed(false);
    }
    setTopic(e);
  };

  const handleTopicSubmit = () => {
    const topicMessage = {
      id: v4(),
      user: "Present",
      message: topic,
      highlight: false,
      static: true,
    };

    setTutorialMessages([...tutorialMessages, topicMessage]);
    setShowTopicInput(false);
    //Trigger second sequence of tutorial messages
    setStartSecondSequence(true);
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
      content={<NewChatContent tutorialMessages={tutorialMessages} />}
      chatContent={true}
      footer={
        <NewChatFooter
          addNewChat={goToNewChat}
          navigateNotAllowed={navigateNotAllowed}
          showTopicInput={showTopicInput}
          topic={topic}
          handleTopic={handleTopic}
          handleTopicSubmit={handleTopicSubmit}
          inputRef={inputRef}
        />
      }
    />
  );
};

export default NewChat;
