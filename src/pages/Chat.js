import React, { useEffect, useState, useContext } from "react";
import { ChatsContext } from "../Store";
import { useParams } from "react-router-dom";
import { Screen } from "../components/Screen/Screen";
import { ChatHeader } from "../components/ChatHeader/ChatHeader";
import { ChatContent } from "../components/ChatContent/ChatContent";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";

const Chat = () => {
  const { getChat, updateChat } = useContext(ChatsContext);
  const [currentUser, setCurrentUser] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [submitNotAllowed, setSubmitNotAllowed] = useState(true);

  const { id } = useParams();

  const chat = getChat(id);

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
    if (currentUser === "Present") {
      setCurrentUser("Past");
    } else {
      setCurrentUser("Present");
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

    updateChat(chat, { user: currentUser, message: newMessage });

    setNewMessage("");
    setSubmitNotAllowed(true);
  };

  return (
    <Screen
      header={<ChatHeader user={currentUser} secondUser={secondUser()} />}
      content={<ChatContent messages={chat.messages} />}
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
