import React, { useContext } from "react";
import { ChatListContext } from "../../Store";
import { Screen, HomeHeader, HomeContent, HomeFooter } from "components";

const Home = () => {
  const { chatList } = useContext(ChatListContext);

  return (
    <>
      <Screen
        header={<HomeHeader />}
        content={<HomeContent chatList={chatList} />}
        footer={<HomeFooter />}
      />
    </>
  );
};

export default Home;
