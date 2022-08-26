import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbDotsVertical } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineDelete, AiOutlineForm, AiFillStar } from "react-icons/ai";
import { BsCheckLg, BsExclamationLg } from "react-icons/bs";
import { ChatListContext } from "Store";
import useClickOutside from "hooks/useClickOutside";
import { UserIcon, IconBackground } from "components";
import {
  ChatContainer,
  ChatInfo,
  ChatStats,
  StatusIcon,
  StatContainer,
  Stats,
  StatIcon,
  ChatIntegration,
  IntegrationNr,
  IntegrationIcon,
  ChatProfile,
  ChatTopic,
  TopicText,
  TopicForm,
  TopicInput,
  ChatDate,
  ChatSubInfo,
  ChatResolve,
  Options,
  OptionsContainer,
  Option,
} from "./ChatsListItem.styles";

const ChatsListItem = ({
  id,
  topic,
  resolve,
  status,
  date,
  messages,
  highlights,
  integrations,
}) => {
  const { editChatTopic, deleteChat } = useContext(ChatListContext);
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [topicValue, setTopicValue] = useState(topic);

  const totalMessages = messages.length;

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
          <ChatTopic showEdit={showEdit}>
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
              {resolve && status === "Resolved" ? (
                <StatusIcon>
                  <IconBackground size={0.8} icon={<BsCheckLg />} />
                </StatusIcon>
              ) : resolve && status === "Integrating..." ? (
                <StatusIcon>
                  <IconBackground size={0.8} icon={<BsExclamationLg />} />
                </StatusIcon>
              ) : null}
            </ChatResolve>
            <ChatIntegration>
              <IntegrationNr>
                {integrations < 1 ? "No" : integrations}
              </IntegrationNr>
              Integration
              {integrations === 1 ? "" : "s"}
              {integrations < 1 ? null : (
                <IntegrationIcon>
                  <IconBackground size={0.8} icon={<BsExclamationLg />} />
                </IntegrationIcon>
              )}
            </ChatIntegration>
          </ChatSubInfo>
          <ChatStats>
            <Stats>
              <StatContainer>
                {totalMessages}
                <StatIcon>
                  <RiMessage2Fill />
                </StatIcon>
              </StatContainer>

              <StatContainer>
                {highlights}
                <StatIcon>
                  <AiFillStar />
                </StatIcon>
              </StatContainer>
            </Stats>
            <ChatDate>{date}</ChatDate>
          </ChatStats>
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
