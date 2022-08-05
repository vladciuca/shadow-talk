import React, { useContext } from "react";
import { ChatListContext } from "../Store";
import { Screen } from "../components/Screen/Screen";
import { HomeHeader } from "../components/HomeHeader/HomeHeader";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { HomeFooter } from "../components/HomeFooter/HomeFooter";

const Home = () => {
  const { chatList, startNewChat } = useContext(ChatListContext);

  return (
    <>
      <Screen
        header={<HomeHeader />}
        content={<HomeContent chatList={chatList} />}
        footer={<HomeFooter startNewChat={() => startNewChat()} />}
      />
    </>
  );
};

export default Home;
