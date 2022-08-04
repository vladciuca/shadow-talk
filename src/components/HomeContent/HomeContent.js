import React from "react";
import { useNavigate } from "react-router-dom";
import { CgCheck } from "react-icons/cg";
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
} from "./HomeContent.styles";

export const HomeContent = ({ chats }) => {
  let navigate = useNavigate();

  return (
    <>
      {chats.map((chat) => (
        <ChatContainer key={chat.id}>
          <ChatProfile>
            <UserIcon
              bgHeightAndWidth={3}
              iconSize={2.5}
              iconMargin={1.2}
              user={"Past"}
            />
          </ChatProfile>
          <ChatInfo onClick={() => navigate(`/chat/${chat.id}`)}>
            <ChatTopic>
              <span>Topic:</span>
              {chat.topic}
            </ChatTopic>
            <ChatSubInfo>
              <ChatResolve>
                {chat.resolved ? "Resolved" : "In Progress..."}
                {chat.resolved ? (
                  <ResolvedMark>
                    <CgCheck />
                  </ResolvedMark>
                ) : (
                  ""
                )}
              </ChatResolve>
              <ChatDate>{chat.date}</ChatDate>
            </ChatSubInfo>
          </ChatInfo>
        </ChatContainer>
      ))}
    </>
  );
};
