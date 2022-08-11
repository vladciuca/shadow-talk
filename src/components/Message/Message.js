import React, { useState, useContext } from "react";
import { ChatListContext } from "../../Store";
import { TbDotsVertical } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useClickOutside from "../../hooks/useClickOutside";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  MessageContainer,
  UserIconContainer,
  MessageContent,
  Options,
  OptionsContainer,
  Option,
} from "./Message.styles";

export const Message = ({
  chat,
  user,
  messageText,
  messageId,
  messageHighlight,
}) => {
  const { deleteMessage, toggleMessageUser, toggleMessageHighlight } =
    useContext(ChatListContext);
  const [showOptions, setShowOptions] = useState(false);

  let menuRef = useClickOutside(() => {
    setShowOptions(false);
  });

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div ref={menuRef}>
      <MessageContainer user={user}>
        <UserIconContainer user={user}>
          <UserIcon
            bgHeightAndWidth={2}
            iconSize={1.5}
            iconMargin={0.85}
            user={user}
          />
        </UserIconContainer>

        <Options onClick={() => toggleOptions()}>
          <TbDotsVertical />
        </Options>
        <MessageContent messageHighlight={messageHighlight} user={user}>
          {messageText}
        </MessageContent>
      </MessageContainer>
      {showOptions ? (
        <OptionsContainer>
          <Option onClick={() => toggleMessageHighlight(chat, messageId)}>
            Highlight {messageHighlight ? <AiFillStar /> : <AiOutlineStar />}
          </Option>
          <Option onClick={() => toggleMessageUser(chat, messageId)}>
            Switch Self <FaUserCircle />
          </Option>
          <Option delete onClick={() => deleteMessage(chat, messageId)}>
            Delete
            <FiTrash2 />
          </Option>
        </OptionsContainer>
      ) : null}
    </div>
  );
};
