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
          inputRef={inputRef}
          user={"Present"}
          topic={topic}
          handleTopic={handleTopic}
          topicInput={true}
          handleTopicSubmit={handleTopicSubmit}
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
