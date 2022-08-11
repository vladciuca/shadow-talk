import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatListContext } from "../../Store";
import { CgCheck } from "react-icons/cg";
import { TbDotsVertical } from "react-icons/tb";
import { FiCheckCircle, FiTrash2 } from "react-icons/fi";
import useClickOutside from "../../hooks/useClickOutside";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  ChatContainer,
  ChatInfo,
  ChatProfile,
  ChatTopic,
  ChatDate,
  ChatSubInfo,
  ChatResolve,
  ResolvedMark,
  Options,
  OptionsContainer,
  Option,
} from "./ChatsListItem.styles";
// import { OptionsDropdown } from "../OptionsDropdown/OptionsDropdown";

export const ChatsListItem = ({ id, topic, resolved, date }) => {
  const { toggleChatResolved, deleteChat } = useContext(ChatListContext);
  const [showOptions, setShowOptions] = useState(false);

  let navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  let menuRef = useClickOutside(() => {
    setShowOptions(false);
  });

  // const options = [
  //   {
  //     text: "Delete",
  //     icon: <FiTrash2 />,
  //     function: deleteChat(),
  //   },
  // ];

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
        <ChatInfo onClick={() => navigate(`/chat/${id}`)}>
          <ChatTopic>
            <span>Topic:</span>
            {topic}
          </ChatTopic>

          <ChatSubInfo>
            <ChatResolve>
              {resolved ? "Resolved" : "In Progress..."}
              {resolved ? (
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
        // <OptionsDropdown options={options} />
        <OptionsContainer showOptions={showOptions}>
          <Option onClick={() => toggleChatResolved(id)}>
            Change Status <FiCheckCircle />
          </Option>
          <Option delete onClick={() => deleteChat(id)}>
            Delete
            <FiTrash2 />
          </Option>
        </OptionsContainer>
      ) : null}
    </div>
  );
};
