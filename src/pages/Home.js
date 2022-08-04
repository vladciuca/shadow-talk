import React, { useContext } from "react";
import { ChatsContext } from "../Store";
import { Screen } from "../components/Screen/Screen";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { HomeFooter } from "../components/HomeFooter/HomeFooter";

const Home = () => {
  const { chats, startNewChat } = useContext(ChatsContext);

  return (
    <>
      <Screen
        header={<HomeHeader />}
        content={<HomeContent chats={chats} />}
        footer={<HomeFooter startNewChat={() => startNewChat()} />}
      />
    </>
  );
};

export default Home;
