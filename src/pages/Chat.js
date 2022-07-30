import React from "react";
import {
  Screen,
  ScreenHeader,
  ScreenContent,
  ScreenOverflow,
  ScreenFooter,
} from "../components/UI/UI.styles";
import { ChatHeader } from "../components/ChatHeader/ChatHeader";
import { ChatFooter } from "../components/ChatFooter/ChatFooter";

const Chat = () => {
  return (
    <>
      <Screen>
        <ScreenHeader>
          <ChatHeader />
        </ScreenHeader>
        <ScreenContent>
          <ScreenOverflow>This is the Chat Page</ScreenOverflow>
        </ScreenContent>
        <ScreenFooter>
          <ChatFooter />
        </ScreenFooter>
      </Screen>
    </>
  );
};

export default Chat;
