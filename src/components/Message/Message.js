import React, { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { FiStar, FiTrash2, FiUser } from "react-icons/fi";
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

export const Message = ({ chat, user, message }) => {
  const [showOptions, setShowOptions] = useState(false);

  let menuRef = useClickOutside(() => {
    setShowOptions(false);
  });

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  console.log(chat);

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
        <MessageContent>{message}</MessageContent>
      </MessageContainer>
      {showOptions ? (
        <OptionsContainer>
          <Option>
            Highlight <FiStar />
          </Option>
          <Option>
            Switch Self <FiUser />
          </Option>
          <Option delete>
            Delete
            <FiTrash2 />
          </Option>
        </OptionsContainer>
      ) : null}
    </div>
  );
};
