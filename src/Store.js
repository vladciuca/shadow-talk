import React, { useState, useEffect } from "react";

export const ChatListContext = React.createContext();

const Store = ({ children }) => {
  const getLocalData = () => {
    const localData = localStorage.getItem("chatList");
    return localData ? JSON.parse(localData) : [];
  };

  const [chatList, setChatList] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("chatList", JSON.stringify(chatList));
  }, [chatList]);

  // ChatList Actions

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

  //update Chat Status based on chat
  const updateChatStatus = (id) => {
    const newChatList = chatList.map((chat) => {
      if (chat.id === id) {
        //STATUS: In progress...
        if (!chat.resolve) {
          chat.status = "Chatting...";
        }
        //STATUS: Integrating...
        if (
          chat.resolve &&
          chat.messages[chat.messages.length - 1].autoResolveMessage
        ) {
          chat.status = "Integrating...";
        }
        //STATUS: Resolved!
        if (
          chat.resolve &&
          chat.messages[chat.messages.length - 1].resolve &&
          chat.messages[chat.messages.length - 1].user === "Present"
        ) {
          chat.status = "Resolved";
        }
      }
      return chat;
    });

    setChatList(newChatList);
  };

  // MessageList Actions

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

  const getMessagesByUser = (chat, user) => {
    return chat.messages.filter((message) => message.user === user);
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
        getMessagesByUser,
        getNrOfHighlights,
        getNrOfIntegrations,
      }}
    >
      {children}
    </ChatListContext.Provider>
  );
};

export default Store;
