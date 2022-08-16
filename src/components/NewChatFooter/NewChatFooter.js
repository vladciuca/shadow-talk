import React from "react";
import { UserChatInput } from "components";
import { NewChatFooterContainer, Button } from "./NewChatFooter.styles";

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
          <Button onClick={addNewChat} navigateNotAllowed={navigateNotAllowed}>
            Continue to Chat
          </Button>
        </NewChatFooterContainer>
      )}
    </>
  );
};

export default NewChatFooter;
