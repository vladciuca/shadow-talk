import React from "react";
import { CgCheck } from "react-icons/cg";
import {
  ChatStatusInfoContainer,
  Status,
  Info,
  ResolvedMark,
  Button,
} from "./ChatStatusInfo.styles";

const ChatStatusInfo = ({ chatStatus, toggleResolve }) => {
  return (
    <ChatStatusInfoContainer>
      {chatStatus === "Resolved" ? (
        <>
          <Status>
            This topic is marked as Resolved
            <ResolvedMark>
              <CgCheck />
            </ResolvedMark>
          </Status>
          <Info>
            You can expand on this topic or
            <Button onClick={toggleResolve}>Return</Button> to chat.
          </Info>
        </>
      ) : (
        <>
          <Status>Currently Integrating with your Past-Self</Status>
          <Info>
            You can continue by answering or
            <Button onClick={toggleResolve}>Return</Button> to chat.
          </Info>
        </>
      )}
    </ChatStatusInfoContainer>
  );
};

export default ChatStatusInfo;
