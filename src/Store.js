import React, { useState } from "react";
import { v4 } from "uuid";

const initialState = [
  {
    id: "1",
    date: "02/08/2022",
    resolved: true,
    topic: "Intro Chat",
    messages: [
      {
        id: "1",
        user: "Past",
        message: "Hi there",
      },
      {
        id: "2",
        user: "Present",
        message: "Hello",
      },
    ],
  },
  {
    id: "2",
    date: "02/08/2022",
    resolved: false,
    topic: "Second Chat topic is really really really long and must be cut",
    messages: [
      {
        id: "1",
        user: "Past",
        message: "Hi there for the second time",
      },
      {
        id: "2",
        user: "Present",
        message: "Hello again!",
      },
    ],
  },
];

export const ChatListContext = React.createContext();

const Store = ({ children }) => {
  const [chatList, setChatList] = useState(initialState);

  const addNewChat = () => {
    const newChat = {
      id: v4(),
      date: new Date().toLocaleDateString(),
      resolved: false,
      topic: "",
      messages: [],
    };

    setChatList([...chatList, newChat]);
  };

  const deleteChat = (id) => {
    const newChatList = chatList.filter((chat) => chat.id !== id);

    setChatList(newChatList);
  };

  const toggleChatResolved = (id) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.resolved = !chat.resolved;
      }
      return chat;
    });

    setChatList(newChatList);
  };

  const getChat = (id) => {
    const chat = chatList.find((chat) => chat.id === id);
    return chat;
  };

  // chatMessageList Actions

  const addNewMessages = (chat, message) => {
    const updatedChat = { ...chat, messages: [...chat.messages, message] };

    const updatedChatList = chatList.map((currentChat) => {
      return currentChat.id === updatedChat.id ? updatedChat : currentChat;
    });

    setChatList(updatedChatList);
  };

  // deleteMessage

  // toggleMessageUser

  // toggleMessageHighlight

  return (
    <ChatListContext.Provider
      value={{
        chatList,
        setChatList,
        toggleChatResolved,
        deleteChat,
        addNewChat,
        getChat,
        addNewMessages,
      }}
    >
      {children}
    </ChatListContext.Provider>
  );
};

export default Store;
