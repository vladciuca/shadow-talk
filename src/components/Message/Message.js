import React, { useState, useContext } from "react";
import { ChatListContext } from "../../Store";
import { TbDotsVertical } from "react-icons/tb";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import { AiOutlineUserSwitch, AiOutlineDelete } from "react-icons/ai";
import useClickOutside from "../../hooks/useClickOutside";
import { UserIcon } from "components";
import {
  MessageContainer,
  UserIconContainer,
  MessageContent,
  Options,
  OptionsSpacer,
  OptionsContainer,
  Option,
} from "./Message.styles";

const Message = ({
  chat,
  user,
  messageText,
  messageId,
  messageHighlight,
  messageStatic,
  messageResolve,
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
        {messageStatic ? (
          <OptionsSpacer />
        ) : (
          <Options onClick={() => toggleOptions()}>
            <TbDotsVertical />
          </Options>
        )}

        <MessageContent
          messageHighlight={messageHighlight}
          messageResolve={messageResolve}
          user={user}
        >
          {messageText}
        </MessageContent>
      </MessageContainer>
      {showOptions ? (
        <OptionsContainer>
          {messageResolve ? null : (
            <>
              <Option onClick={() => toggleMessageHighlight(chat, messageId)}>
                Highlight
                <span>
                  {messageHighlight ? (
                    <BsLightbulbFill size="0.9rem" />
                  ) : (
                    <BsLightbulb size="0.9rem" />
                  )}
                </span>
              </Option>
              <Option onClick={() => toggleMessageUser(chat, messageId)}>
                Switch Self
                <span>
                  <AiOutlineUserSwitch />
                </span>
              </Option>
            </>
          )}
          <Option delete onClick={() => deleteMessage(chat, messageId)}>
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

export default Message;
