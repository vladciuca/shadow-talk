import React, { useEffect, useState, useContext } from "react";
import { ChatListContext } from "../Store";
import { useParams } from "react-router-dom";
import { Screen } from "../components/Screen/Screen";
import { ChatHeader } from "../components/ChatHeader/ChatHeader";
import { ChatContent } from "../components/ChatContent/ChatContent";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";

const Chat = () => {
  const { getChat } = useContext(ChatListContext);
  const [currentUser, setCurrentUser] = useState("");

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
  };

  return (
    <Screen
      header={<ChatHeader user={currentUser} secondUser={secondUser()} />}
      content={<ChatContent chat={chat} messages={chat.messages} />}
      chatContent={true}
      footer={
        <ChatFooter
          chat={chat}
          user={currentUser}
          secondUser={secondUser()}
          switchUser={switchUser}
        />
      }
    />
  );
};

export default Chat;
