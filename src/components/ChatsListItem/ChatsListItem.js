import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CgCheck } from "react-icons/cg";
import { TbDotsVertical } from "react-icons/tb";
import { AiOutlineDelete, AiOutlineForm } from "react-icons/ai";
import { ChatListContext } from "../../Store";
import useClickOutside from "../../hooks/useClickOutside";
import { UserIcon } from "components";
import {
  ChatContainer,
  ChatInfo,
  ChatProfile,
  ChatTopic,
  TopicText,
  TopicForm,
  TopicInput,
  ChatDate,
  ChatSubInfo,
  ChatResolve,
  ResolvedMark,
  Options,
  OptionsContainer,
  Option,
} from "./ChatsListItem.styles";

const ChatsListItem = ({ id, topic, resolve, status, date }) => {
  const { editChatTopic, deleteChat } = useContext(ChatListContext);
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [topicValue, setTopicValue] = useState(topic);

  let navigate = useNavigate();

  const goToChat = () => {
    if (showEdit) {
      return;
    } else {
      navigate(`/chat/${id}`);
    }
  };

  let menuRef = useClickOutside(() => {
    if (showEdit) {
      editChatTopic(id, topicValue);
    }

    setShowOptions(false);
    setShowEdit(false);
  });

  const editRef = useRef();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setShowEdit(false);
    editChatTopic(id, topicValue);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
    editChatTopic(id, topicValue);
  };

  const handleTopicChange = (e) => {
    setTopicValue(e.target.value);
  };

  const editTopic = (e) => {
    e.preventDefault();
    if (topicValue === "") {
      return;
    }

    setShowOptions(false);
    setShowEdit(false);
    editChatTopic(id, topicValue);
  };

  useEffect(() => {
    if (showEdit) {
      editRef.current.focus();
    }
  }, [showEdit]);

  return (
    <div ref={menuRef}>
      <ChatContainer>
        <ChatProfile>
          <UserIcon
            bgHeightAndWidth={3}
            iconSize={2.5}
            iconMargin={1.2}
            user={"Past"}
          />
        </ChatProfile>
        <ChatInfo onClick={goToChat}>
          <ChatTopic>
            <span>Topic:</span>
            {showEdit ? (
              <TopicForm onSubmit={(e) => editTopic(e)}>
                <TopicInput
                  ref={editRef}
                  type="text"
                  onChange={(e) => handleTopicChange(e)}
                  value={topicValue}
                />
              </TopicForm>
            ) : (
              <TopicText>{topic}</TopicText>
            )}
          </ChatTopic>
          <ChatSubInfo>
            <ChatResolve>
              {status}
              {resolve ? (
                <ResolvedMark>
                  <CgCheck />
                </ResolvedMark>
              ) : (
                ""
              )}
            </ChatResolve>
            <ChatDate>{date}</ChatDate>
          </ChatSubInfo>
        </ChatInfo>

        <Options onClick={() => toggleOptions()}>
          <TbDotsVertical />
        </Options>
      </ChatContainer>
      {showOptions ? (
        <OptionsContainer showOptions={showOptions}>
          <Option
            onClick={() => {
              toggleEdit();
            }}
          >
            Edit Topic
            <span>
              <AiOutlineForm />
            </span>
          </Option>
          <Option delete onClick={() => deleteChat(id)}>
            Delete
            <span>
              <AiOutlineDelete />
            </span>
          </Option>
        </OptionsContainer>
      ) : null}
    </div>
  );
};

export default ChatsListItem;
