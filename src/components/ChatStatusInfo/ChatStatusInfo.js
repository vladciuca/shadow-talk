import React from "react";
import { BsExclamationLg } from "react-icons/bs";
import { IconBackground } from "components";
import {
  ChatStatusInfoContainer,
  Status,
  Info,
  Icon,
  Button,
} from "./ChatStatusInfo.styles";

const ChatStatusInfo = ({ chatStatus, toggleResolve, nrOfIntegrations }) => {
  return (
    <ChatStatusInfoContainer>
      <Status>
        {nrOfIntegrations < 1 ? "No" : nrOfIntegrations} Successful Integration
        {nrOfIntegrations === 1 ? "" : "s"}
        <Icon>
          <IconBackground size={1} icon={<BsExclamationLg />} />
        </Icon>
      </Status>
      {chatStatus === "Resolved" ? (
        <>
          <Info>
            You can expand on your answer or
            <Button onClick={toggleResolve}>Return</Button>to chat.
          </Info>
        </>
      ) : (
        <>
          <Info>
            You can continue by answering or
            <Button onClick={toggleResolve}>Return</Button>to chat.
          </Info>
        </>
      )}
    </ChatStatusInfoContainer>
  );
};

export default ChatStatusInfo;
