import React, { useContext } from "react";
import { ChatListContext } from "Store";
import { ChatsListItem } from "components";

const HomeContent = ({ chatList }) => {
  const { getNrOfHighlights, getNrOfIntegrations } =
    useContext(ChatListContext);
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
          messages={chat.messages}
          highlights={getNrOfHighlights(chat)}
          integrations={getNrOfIntegrations(chat)}
        />
      ))}
    </>
  );
};

export default HomeContent;
