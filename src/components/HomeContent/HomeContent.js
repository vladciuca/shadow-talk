import React from "react";
import { ChatsListItem } from "../../components";

const HomeContent = ({ chatList }) => {
  return (
    <>
      {chatList.map((chat) => (
        <ChatsListItem
          key={chat.id}
          id={chat.id}
          topic={chat.topic}
          resolved={chat.resolved}
          date={chat.date}
        />
      ))}
    </>
  );
};

export default HomeContent;
