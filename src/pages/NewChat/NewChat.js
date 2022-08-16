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

  // const firstSequence = firstSequenceOfMessages;
  // const secondSequence = secondSequenceOfMessages;

  const [startSecondSequence, setStartSecondSequence] = useState(false);

  const [topic, setTopic] = useState("");
  const [showTopicInput, setShowTopicInput] = useState(false);

  const [tutorialMessages, setTutorialMessages] = useState([]);

  const [navigateNotAllowed, setNavigateNotAllowed] = useState(true);

  const inputRef = useRef();

  const sendMessages = (sequence) => {
    let interval = setInterval(() => {
      if (sequence.length <= 1) {
        clearInterval(interval);
        if (!startSecondSequence) {
          setShowTopicInput(true);
        }
        if (startSecondSequence) {
          setNavigateNotAllowed(false);
        }
      }

      const message = sequence.shift();

      setTutorialMessages((prev) => [...prev, message]);
    }, 1000);
  };

  //figure out how to get the msg data again on mount
  useEffect(() => {
    console.log(firstSequence);
    if (firstSequence.length < 0) {
      setFirstSequence(firstSequenceOfMessages);
    }
  }, []);

  useEffect(() => {
    sendMessages(firstSequence);
  }, []);

  useEffect(() => {
    if (startSecondSequence) {
      sendMessages(secondSequence);
    }
  }, [startSecondSequence]);

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

  const handleTopic = (e) => {
    setTopic(e);
  };

  const handleTopicSubmit = () => {
    if (topic === "") {
      return;
    }
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
