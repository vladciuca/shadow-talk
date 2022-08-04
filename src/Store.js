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
        user: "Past",
        message: "Hi there",
      },
      {
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
        user: "Past",
        message: "Hi there for the second time",
      },
      {
        user: "Present",
        message: "Hello again!",
      },
    ],
  },
];

export const ChatsContext = React.createContext();

const Store = ({ children }) => {
  const [chats, setChats] = useState(initialState);

  const startNewChat = () => {
    const newChat = {
      id: v4(),
      date: new Date().toLocaleDateString(),
      resolved: false,
      topic: "",
      messages: [],
    };

    setChats([...chats, newChat]);
  };

  const getChat = (id) => {
    const chat = chats.find((chat) => chat.id === id);
    return chat;
  };

  const updateChat = (chat, message) => {
    const updatedChat = { ...chat, messages: [...chat.messages, message] };

    // longer version for understanding how to swap an obj in an array with a new obj
    // const newChatList = chats.map((currentChat) => {
    //   if (currentChat.id === updatedChat.id) {
    //     console.log("found chat");
    //     return updatedChat;
    //   } else {
    //     return currentChat;
    //   }
    // });

    const updatedChats = chats.map((currentChat) => {
      return currentChat.id === updatedChat.id ? updatedChat : currentChat;
    });

    setChats(updatedChats);
  };

  return (
    <ChatsContext.Provider
      value={{ chats, setChats, startNewChat, getChat, updateChat }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default Store;
