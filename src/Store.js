import React, { useState } from "react";

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
        highlight: true,
      },
      {
        id: "2",
        user: "Present",
        message: "Hello",
        highlight: true,
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
        highlight: false,
      },
      {
        id: "2",
        user: "Present",
        message: "Hello again!",
        highlight: true,
      },
    ],
  },
];

export const ChatListContext = React.createContext();

const Store = ({ children }) => {
  const [chatList, setChatList] = useState(initialState);

  const getChat = (id) => {
    const chat = chatList.find((chat) => chat.id === id);
    return chat;
  };

  const addNewChat = (newChat) => {
    setChatList([...chatList, newChat]);
  };

  const deleteChat = (id) => {
    const newChatList = chatList.filter((chat) => chat.id !== id);

    setChatList(newChatList);
  };

  const editChatTopic = (id, topic) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.topic = topic;
      }
      return chat;
    });

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

  // chatMessageList Actions

  const addNewMessage = (chat, message) => {
    const updatedChat = { ...chat, messages: [...chat.messages, message] };

    const updatedChatList = chatList.map((currentChat) => {
      return currentChat.id === updatedChat.id ? updatedChat : currentChat;
    });

    setChatList(updatedChatList);
  };

  const updateMessages = (chat, messageList) => {
    const updatedChat = { ...chat, messages: messageList };

    const updatedChatList = chatList.map((currentChat) => {
      return currentChat.id === updatedChat.id ? updatedChat : currentChat;
    });

    setChatList(updatedChatList);
  };

  const deleteMessage = (chat, messageId) => {
    const newMessageList = chat.messages.filter(
      (message) => message.id !== messageId
    );

    updateMessages(chat, newMessageList);
  };

  const toggleMessageUser = (chat, messageId) => {
    const newMessageList = chat.messages.map((message) => {
      if (message.id === messageId) {
        if (message.user === "Present") {
          return { ...message, user: "Past" };
        } else {
          return { ...message, user: "Present" };
        }
      }
      return message;
    });

    updateMessages(chat, newMessageList);
  };

  const toggleMessageHighlight = (chat, messageId) => {
    const newMessageList = chat.messages.map((message) => {
      if (message.id === messageId) {
        message.highlight = !message.highlight;
      }
      return message;
    });

    updateMessages(chat, newMessageList);
  };

  return (
    <ChatListContext.Provider
      value={{
        chatList,
        setChatList,
        toggleChatResolved,
        editChatTopic,
        deleteChat,
        addNewChat,
        getChat,
        addNewMessage,
        deleteMessage,
        toggleMessageUser,
        toggleMessageHighlight,
      }}
    >
      {children}
    </ChatListContext.Provider>
  );
};

export default Store;
