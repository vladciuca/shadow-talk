import React from "react";
import { ChatsListItem } from "components";

const HomeContent = ({ chatList }) => {
  return (
    <>
      {chatList.map((chat) => (
        <ChatsListItem
          key={chat.id}
          id={chat.id}
          topic={chat.topic}
          resolve={chat.resolve}
          status={chat.status}
          date={chat.date}
        />
      ))}
    </>
  );
};

export default HomeContent;
