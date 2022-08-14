import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ChatListContext } from "../../Store";
import { Screen, ChatHeader, ChatContent, ChatFooter } from "components";

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
      header={<ChatHeader secondUser={secondUser()} topic={chat.topic} />}
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
