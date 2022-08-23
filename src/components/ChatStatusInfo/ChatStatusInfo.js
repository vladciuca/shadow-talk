import React from "react";
import { CgCheck } from "react-icons/cg";
import {
  ChatStatusInfoContainer,
  Status,
  Info,
  ResolvedMark,
  Button,
} from "./ChatStatusInfo.styles";

const ChatStatusInfo = ({ chatStatus, toggleResolve, nrOfIntegrations }) => {
  return (
    <ChatStatusInfoContainer>
      {chatStatus === "Resolved" ? (
        <>
          <Status>Integration successful!</Status>
          <Info>
            You can expand on your answer or
            <Button onClick={toggleResolve}>Return</Button>to chat.
          </Info>
        </>
      ) : (
        <>
          <Status>Currently Integrating...</Status>
          <Info>
            You can continue by answering or
            <Button onClick={toggleResolve}>Return</Button>to chat.
          </Info>
        </>
      )}
      <Status>
        You have {nrOfIntegrations} Successful Integrations
        <ResolvedMark>
          <CgCheck />
        </ResolvedMark>
      </Status>
    </ChatStatusInfoContainer>
  );
};

export default ChatStatusInfo;
