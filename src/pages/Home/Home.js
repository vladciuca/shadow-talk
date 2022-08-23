import React, { useContext } from "react";
import { ChatListContext } from "Store";
import { Screen, HomeHeader, HomeContent, HomeFooter } from "components";

const Home = () => {
  const { chatList, getResolvedChats, getIntegratingChats } =
    useContext(ChatListContext);

  const nrOfChats = chatList.length;
  const nrOfResolvedChats = getResolvedChats.length;
  const nrOfIntegratingChats = getIntegratingChats.length;

  return (
    <>
      <Screen
        header={
          <HomeHeader
            nrOfChats={nrOfChats}
            nrOfResolvedChats={nrOfResolvedChats}
            nrOfIntegratingChats={nrOfIntegratingChats}
          />
        }
        content={<HomeContent chatList={chatList} />}
        footer={<HomeFooter />}
      />
    </>
  );
};

export default Home;
