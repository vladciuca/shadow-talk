import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { ChatListContext } from "../../Store";
import {
  Screen,
  ChatHeader,
  NewChatContent,
  NewChatFooter,
  AppInfo,
  AppFeedback,
  Logo,
} from "components";

import {
  firstSequenceOfMessages,
  secondSequenceOfMessages,
} from "./tutorialMessages";

let firstSequence = [...firstSequenceOfMessages];
let secondSequence = [...secondSequenceOfMessages];

const NewChat = () => {
  const { addNewChat } = useContext(ChatListContext);

  const [startSecondSequence, setStartSecondSequence] = useState(false);

  const [topic, setTopic] = useState("");
  const [showTopicInput, setShowTopicInput] = useState(false);

  const [tutorialMessages, setTutorialMessages] = useState([]);

  const [navigateNotAllowed, setNavigateNotAllowed] = useState(true);

  const [tutorialTyping, setTutorialTyping] = useState(true);
  const [userTyping, setUserTyping] = useState(false);

  const inputRef = useRef();

  const sendMessages = (sequence) => {
    let interval = setInterval(() => {
      if (sequence.length <= 1) {
        clearInterval(interval);
        if (!startSecondSequence) {
          setShowTopicInput(true);
          // tutorial is not typing anymore in first sequence
          setTutorialTyping(false);
        }
        if (startSecondSequence) {
          setNavigateNotAllowed(false);
          // tutorial is not typing anymore in second sequence
          setTutorialTyping(false);
        }
      }

      const message = sequence.shift();

      setTutorialMessages((prev) => [...prev, message]);
    }, 1000);
  };

  // reset the array on component unmount
  useEffect(() => {
    return function cleanUp() {
      firstSequence = [...firstSequenceOfMessages];
      secondSequence = [...secondSequenceOfMessages];
    };
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

  useEffect(() => {
    if (topic === "") {
      setUserTyping(false);
    } else {
      setUserTyping(true);
    }
  }, [topic]);

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
    setUserTyping(false);
    // tutorial is typing again in Second Sequence
    setTutorialTyping(true);
  };

  const goToNewChat = () => {
    if (topic === "") {
      return;
    }
    const newChat = {
      id: v4(),
      date: new Date().toLocaleDateString(),
      resolve: false,
      status: "Chatting...",
      topic,
      messages: [],
    };

    addNewChat(newChat);
    navigate(`/chat/${newChat.id}`);
  };

  return (
    <>
      <AppInfo />
      <AppFeedback />
      <Logo />
      <Screen
        header={<ChatHeader secondUser={"Past"} tutorial={true} />}
        content={
          <NewChatContent
            tutorialMessages={tutorialMessages}
            tutorialTyping={tutorialTyping}
            userTyping={userTyping}
          />
        }
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
    </>
  );
};

export default NewChat;
