import React, { useState } from "react";

const initialState = [
  {
    id: "1",
    date: "02/08/2022",
    resolve: false,
    status: "Discussing...",
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
    resolve: false,
    status: "Discussing...",
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

  //get ChatList by Status
  //status: 'Discussing...' (In progress)
  const getInProgressChats = chatList.filter(
    (chat) => chat.status === "Discussing..."
  );
  //status: 'Integrating...'
  const getIntegratingChats = chatList.filter(
    (chat) => chat.status === "Integrating..."
  );
  //status: 'Resolved'
  const getResolvedChats = chatList.filter(
    (chat) => chat.status === "Resolved"
  );

  //get Chat by ID
  const getChat = (id) => {
    const chat = chatList.find((chat) => chat.id === id);
    return chat;
  };

  //add New Chat
  const addNewChat = (newChat) => {
    setChatList([...chatList, newChat]);
  };

  //delete Chat by ID
  const deleteChat = (id) => {
    const newChatList = chatList.filter((chat) => chat.id !== id);

    setChatList(newChatList);
  };

  //edit Chat Topic by Chat ID
  const editChatTopic = (id, topic) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.topic = topic;
      }
      return chat;
    });

    setChatList(newChatList);
  };

  //toggle Chat Resolve property
  const toggleChatResolve = (id) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.resolve = !chat.resolve;
      }
      return chat;
    });

    setChatList(newChatList);
  };

  //change Chat Resolve property by Boolean Value
  const changeChatResolve = (id, value) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.resolve = value;
      }
      return chat;
    });

    setChatList(newChatList);
  };

  //change Chat Status with specific value START WORKING FROM HERE
  const updateChatStatus = (id, status) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        chat.status = status;
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

  const getPastMessages = (chat) => {
    return chat.messages.filter((message) => message.user === "Past");
  };

  const getPresentMessages = (chat) => {
    return chat.messages.filter((message) => message.user === "Present");
  };

  const getNrOfHighlights = (chat) => {
    return chat.messages.filter((message) => message.highlight).length;
  };

  const getNrOfIntegrations = (chat) => {
    let counter = 0;
    for (let i = 0; i < chat.messages.length - 1; i++) {
      if (
        chat.messages[i].autoResolveMessage &&
        chat.messages[i + 1].resolve &&
        chat.messages[i + 1].user === "Present"
      ) {
        counter++;
      }
    }
    return counter;
  };

  return (
    <ChatListContext.Provider
      value={{
        chatList,
        setChatList,
        getInProgressChats,
        getIntegratingChats,
        getResolvedChats,
        toggleChatResolve,
        changeChatResolve,
        updateChatStatus,
        editChatTopic,
        deleteChat,
        addNewChat,
        getChat,
        addNewMessage,
        deleteMessage,
        toggleMessageUser,
        toggleMessageHighlight,
        getPastMessages,
        getPresentMessages,
        getNrOfHighlights,
        getNrOfIntegrations,
      }}
    >
      {children}
    </ChatListContext.Provider>
  );
};

export default Store;
