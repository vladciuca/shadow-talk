import React from "react";
import { UserChatInput, Button } from "components";
import { NewChatFooterContainer } from "./NewChatFooter.styles";

const NewChatFooter = ({
  inputRef,
  topic,
  handleTopic,
  handleTopicSubmit,
  showTopicInput,
  addNewChat,
  navigateNotAllowed,
}) => {
  return (
    <>
      {showTopicInput ? (
        <UserChatInput
          topicInput={true}
          topic={topic}
          handleTopic={handleTopic}
          handleTopicSubmit={handleTopicSubmit}
          user={"Present"}
          inputRef={inputRef}
        />
      ) : (
        <NewChatFooterContainer>
          <Button
            text={"Continue to Chat"}
            handleClick={addNewChat}
            navigateNotAllowed={navigateNotAllowed}
          />
        </NewChatFooterContainer>
      )}
    </>
  );
};

export default NewChatFooter;
