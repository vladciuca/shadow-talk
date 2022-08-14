import React from "react";
import { NewChatFooterContainer, Button } from "./NewChatFooter.styles";

const NewChatFooter = ({ addNewChat, navigateNotAllowed }) => {
  return (
    <NewChatFooterContainer>
      <Button onClick={addNewChat} navigateNotAllowed={navigateNotAllowed}>
        Continue to Chat
      </Button>
    </NewChatFooterContainer>
  );
};

export default NewChatFooter;
