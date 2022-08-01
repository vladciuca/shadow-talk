import React, { useEffect, useState } from "react";
import { Screen } from "../components/Screen/Screen";
import { ChatHeader } from "../components/ChatHeader/ChatHeader";
import { ChatContent } from "../components/ChatContent/ChatContent";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [submitNotAllowed, setSubmitNotAllowed] = useState(true);

  useEffect(() => {
    setCurrentUser("PRESENT");
  }, []);

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
    setNewMessage("");
  };

  const handleChange = (e) => {
    if (e !== "") {
      setSubmitNotAllowed(false);
    } else {
      setSubmitNotAllowed(true);
    }
    setNewMessage(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage === "") {
      return;
    }
    setMessages([...messages, { user: currentUser, text: newMessage }]);
    setNewMessage("");
    setSubmitNotAllowed(true);
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
          submitNotAllowed={submitNotAllowed}
        />
      }
    />
  );
};

export default Chat;
