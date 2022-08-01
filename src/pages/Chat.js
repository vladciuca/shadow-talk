import React, { useEffect, useState } from "react";
import { Screen } from "../components/Screen/Screen";
import { ChatHeader } from "../components/ChatHeader/ChatHeader";
import { ChatContent } from "../components/ChatContent/ChatContent";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setCurrentUser("PRESENT");
  }, []);

  useEffect(() => {
    console.log(messages, "inState");
  }, [messages]);

  const secondUser = () => {
    if (currentUser === "PRESENT") {
      return "PAST";
    } else {
      return "PRESENT";
    }
  };

  const switchUser = () => {
    if (currentUser === "PRESENT") {
      setCurrentUser("PAST");
    } else {
      setCurrentUser("PRESENT");
    }
  };

  const handleChange = (e) => {
    setNewMessage(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { user: currentUser, text: newMessage }]);
    setNewMessage("");
  };

  return (
    <Screen
      header={<ChatHeader user={currentUser} secondUser={secondUser()} />}
      content={<ChatContent messages={messages} />}
      chatContent={true}
      footer={
        <ChatFooter
          user={currentUser}
          secondUser={secondUser()}
          switchUser={() => switchUser()}
          handleChange={(e) => handleChange(e.target.value)}
          handleValue={newMessage}
          handleSubmit={(e) => handleSubmit(e)}
        />
      }
    />
  );
};

export default Chat;
